import React, { useEffect, useState, useRef } from 'react'
import guitar from '../assets/guitar.png'
import { Navbar } from '../Components/Navbar'

const standardNoteFreqs = {
  E2: 82.41,
  A2: 110.00,
  D3: 146.83,
  G3: 196.00,
  B3: 246.94,
  E4: 329.63,
}

function findClosestNoteForString(freq, targetFreq) {
  if (!freq || !targetFreq) return null
  const cents = 1200 * Math.log2(freq / targetFreq)
  return { targetFreq, cents }
}

function autoCorrelate(buffer, sampleRate) {
  let SIZE = buffer.length
  let rms = 0
  for (let i = 0; i < SIZE; i++) {
    const val = buffer[i]
    rms += val * val
  }
  rms = Math.sqrt(rms / SIZE)
  if (rms < 0.01) return -1
  let r1 = 0,
    r2 = SIZE - 1,
    threshold = 0.2
  for (let i = 0; i < SIZE / 2; i++) {
    if (Math.abs(buffer[i]) < threshold) {
      r1 = i
      break
    }
  }
  for (let i = 1; i < SIZE / 2; i++) {
    if (Math.abs(buffer[SIZE - i]) < threshold) {
      r2 = SIZE - i
      break
    }
  }
  buffer = buffer.slice(r1, r2)
  SIZE = buffer.length
  const c = new Array(SIZE).fill(0)
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE - i; j++) {
      c[i] += buffer[j] * buffer[j + i]
    }
  }
  let d = 0
  while (c[d] > c[d + 1]) d++
  let maxval = -1,
    maxpos = -1
  for (let i = d; i < SIZE; i++) {
    if (c[i] > maxval) {
      maxval = c[i]
      maxpos = i
    }
  }
  let T0 = maxpos
  let x1 = c[T0 - 1],
    x2 = c[T0],
    x3 = c[T0 + 1]
  let a = (x1 + x3 - 2 * x2) / 2
  let b = (x3 - x1) / 2
  if (a) T0 = T0 - b / (2 * a)
  return sampleRate / T0
}

export function Tuner() {

  const [selectedString, setSelectedString] = useState(null)
  const [closestNote, setClosestNote] = useState(null)
  const [tuningStatus, setTuningStatus] = useState('—')
  const [soundActive, setSoundActive] = useState(false)
  const [needleAngle, setNeedleAngle] = useState(0)

  const targetAngleRef = useRef(0)
  const animationFrameRef = useRef(null)

  const audioContextRef = useRef(null)
  const analyserRef = useRef(null)
  const dataArrayRef = useRef(null)

  useEffect(() => {
    if (!selectedString) return

    async function setup() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
        analyserRef.current = audioContextRef.current.createAnalyser()
        const source = audioContextRef.current.createMediaStreamSource(stream)
        source.connect(analyserRef.current)
        analyserRef.current.fftSize = 2048
        dataArrayRef.current = new Float32Array(analyserRef.current.fftSize)

        function update() {
          analyserRef.current.getFloatTimeDomainData(dataArrayRef.current)

          let rms = 0
          for (let i = 0; i < dataArrayRef.current.length; i++) {
            rms += dataArrayRef.current[i] * dataArrayRef.current[i]
          }
          rms = Math.sqrt(rms / dataArrayRef.current.length)
          setSoundActive(rms > 0.01)

          const pitch = autoCorrelate(dataArrayRef.current, audioContextRef.current.sampleRate)

          if (pitch !== -1 && pitch < 1000) {
            const targetFreq = standardNoteFreqs[selectedString]
            const noteInfo = findClosestNoteForString(pitch, targetFreq)
            setClosestNote(noteInfo)

            if (Math.abs(noteInfo.cents) < 5) setTuningStatus('In Tune')
            else if (noteInfo.cents < 0) setTuningStatus('Flat')
            else setTuningStatus('Sharp')

            targetAngleRef.current = Math.max(-25, Math.min(25, (noteInfo.cents / 50) * 25))
          } else {
            setClosestNote(null)
            setTuningStatus('—')
            targetAngleRef.current = 0
          }
          requestAnimationFrame(update)
        }
        update()
      } catch (err) {
        alert('Microphone access is required for the tuner to work.')
        console.error(err)
      }
    }
    setup()

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      if (audioContextRef.current) audioContextRef.current.close()
    }
  }, [selectedString])

  useEffect(() => {
    function animate() {
      setNeedleAngle((currentAngle) => {
        const diff = targetAngleRef.current - currentAngle
        const delta = diff * 0.15
        if (Math.abs(delta) < 0.1) return targetAngleRef.current
        return currentAngle + delta
      })
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animationFrameRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameRef.current)
  }, [])

  return (
    <div className="d-flex flex-column align-items-center vh-100" style={{ backgroundColor: '#0D2B56' }}>
    <Navbar /> 
      {/* String selection buttons */}
      <div className="mb-4 d-flex justify-content-center gap-3 flex-wrap" style={{ maxWidth: '600px', marginTop: '3rem'  }}>
        {Object.entries(standardNoteFreqs).map(([note]) => (
          <button
            key={note}
            className={`btn btn-lg ${selectedString === note ? 'btn-primary' : 'btn-outline-light'}`}
            onClick={() => setSelectedString(note)}
          >
            {note}
          </button>
        ))}
      </div>

      <div style={{ position: 'relative', width: '600px', height: '1050px' }}>
        <img
          src={guitar}
          alt="Guitar headstock"
          style={{ width: '100%', height: '100%', objectFit: 'contain', userSelect: 'none' }}
          draggable={false}
        />

        {/* Needle */}
        <div
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            width: '36px',
            height: '420px',
            backgroundColor: '#FF4C4C',
            borderRadius: '18px',
            transformOrigin: 'bottom center',
            transform: `translateX(-50%) rotate(${needleAngle}deg)`,
            transition: 'transform 0.1s ease-out',
            pointerEvents: 'none',
            boxShadow: '0 0 32px rgba(255, 76, 76, 0.8)',
            zIndex: 20,
          }}
        />

        {/* Note readout */}
        <div
          className="text-center text-white"
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'monospace',
            fontWeight: '700',
            fontSize: '144px',
            userSelect: 'none',
            zIndex: 30,
          }}
        >
          {selectedString ? selectedString : '--'}
        </div>

        {/* Tuning status */}
        <div
          className={`text-center mt-2 fw-bold ${
            tuningStatus === 'In Tune'
              ? 'text-success'
              : tuningStatus === 'Flat'
              ? 'text-warning'
              : tuningStatus === 'Sharp'
              ? 'text-danger'
              : 'text-secondary'
          }`}
          style={{
            position: 'absolute',
            bottom: '13%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'Arial, sans-serif',
            fontWeight: '600',
            fontSize: '108px',
            userSelect: 'none',
            zIndex: 30,
          }}
        >
          {tuningStatus}
        </div>
      </div>
    </div>
  )
}
