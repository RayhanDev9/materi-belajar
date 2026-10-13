<template>
  <div class="clock-simulator">
    <div class="simulator-card">
      <!-- Visual Clock Face -->
      <div class="analog-clock">
        <div class="clock-dial">
          <div 
            v-for="n in 12" 
            :key="n" 
            class="clock-num" 
            :style="`transform: rotate(${n * 30}deg)`"
          >
            <span :style="`transform: rotate(-${n * 30}deg)`">{{ n }}</span>
          </div>
          <!-- Clock Hands -->
          <div class="center-dot"></div>
          <div 
            class="hand hour-hand" 
            :style="`transform: rotate(${hourAngle}deg)`"
          ></div>
          <div 
            class="hand minute-hand" 
            :style="`transform: rotate(${minuteAngle}deg)`"
          ></div>
        </div>
      </div>

      <!-- Controls & Readings -->
      <div class="clock-details">
        <div class="digital-display">
          <span class="digital-time">{{ formattedDigital }}</span>
          <span class="period-badge">{{ period }}</span>
        </div>

        <!-- Presets -->
        <div class="time-presets">
          <span class="preset-label">Contoh Cepat:</span>
          <button @click="setTime(7, 0)">07:00 (O'clock)</button>
          <button @click="setTime(7, 15)">07:15 (Quarter past)</button>
          <button @click="setTime(7, 30)">07:30 (Half past)</button>
          <button @click="setTime(7, 45)">07:45 (Quarter to)</button>
          <button @click="setTime(8, 50)">08:50 (Ten to 9)</button>
        </div>

        <!-- Sliders -->
        <div class="sliders-container">
          <div class="slider-group">
            <label>Jam: <strong>{{ hour }}</strong></label>
            <input type="range" min="1" max="12" v-model.number="hour" />
          </div>
          <div class="slider-group">
            <label>Menit: <strong>{{ minute < 10 ? '0' + minute : minute }}</strong></label>
            <input type="range" min="0" max="59" step="5" v-model.number="minute" />
          </div>
        </div>

        <!-- Pronunciation Cards -->
        <div class="reading-results">
          <div class="reading-box easy">
            <div class="box-tag">🟢 Cara Santai (Paling Mudah)</div>
            <div class="box-text">{{ casualTimeText }}</div>
            <AudioButton :text="casualTimeText" label="Dengar Cara Santai" />
          </div>

          <div class="reading-box formal">
            <div class="box-tag">🔵 Cara Tradisional (Past / To)</div>
            <div class="box-text">{{ formalTimeText }}</div>
            <AudioButton :text="formalTimeText" label="Dengar Cara Formal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AudioButton from './AudioButton.vue';

const hour = ref(7);
const minute = ref(15);
const period = ref('AM');

const hourAngle = computed(() => {
  return (hour.value % 12) * 30 + (minute.value / 60) * 30;
});

const minuteAngle = computed(() => {
  return minute.value * 6;
});

const formattedDigital = computed(() => {
  const h = hour.value < 10 ? `0${hour.value}` : hour.value;
  const m = minute.value < 10 ? `0${minute.value}` : minute.value;
  return `${h}:${m}`;
});

function setTime(h, m) {
  hour.value = h;
  minute.value = m;
}

const numberWords = [
  'twelve', 'one', 'two', 'three', 'four', 'five', 'six', 
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'
];

const minuteWords = {
  0: 'o\'clock',
  5: 'five',
  10: 'ten',
  15: 'fifteen',
  20: 'twenty',
  25: 'twenty-five',
  30: 'thirty',
  35: 'thirty-five',
  40: 'forty',
  45: 'forty-five',
  50: 'fifty',
  55: 'fifty-five'
};

const casualTimeText = computed(() => {
  const hWord = numberWords[hour.value % 12];
  if (minute.value === 0) {
    return `${capitalize(hWord)} o'clock`;
  }
  if (minute.value < 10) {
    return `${capitalize(hWord)} oh ${numberWords[minute.value]}`;
  }
  const mWord = minuteWords[minute.value] || `${minute.value}`;
  return `${capitalize(hWord)} ${mWord}`;
});

const formalTimeText = computed(() => {
  const curHourWord = numberWords[hour.value % 12];
  const nextHourWord = numberWords[(hour.value + 1) % 12];

  if (minute.value === 0) {
    return `${capitalize(curHourWord)} o'clock`;
  }
  if (minute.value === 15) {
    return `Quarter past ${curHourWord}`;
  }
  if (minute.value === 30) {
    return `Half past ${curHourWord}`;
  }
  if (minute.value === 45) {
    return `Quarter to ${nextHourWord}`;
  }
  if (minute.value < 30) {
    const m = minuteWords[minute.value] || `${minute.value}`;
    return `${capitalize(m)} past ${curHourWord}`;
  } else {
    const remaining = 60 - minute.value;
    const m = minuteWords[remaining] || `${remaining}`;
    return `${capitalize(m)} to ${nextHourWord}`;
  }
});

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<style scoped>
.clock-simulator {
  margin-top: 1rem;
}

.simulator-card {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 2rem;
  background: var(--surface, #ffffff);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 1.25rem;
  padding: 1.75rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  align-items: center;
}

.analog-clock {
  display: flex;
  justify-content: center;
}

.clock-dial {
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: var(--surface-2, #f8fafc);
  border: 8px solid var(--primary, #4f46e5);
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(79, 70, 229, 0.2);
}

.clock-num {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-title, #1e293b);
  padding-top: 6px;
}

.clock-num span {
  display: inline-block;
}

.center-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  background: var(--primary, #4f46e5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform-origin: bottom center;
  border-radius: 4px;
  transition: transform 0.2s cubic-bezier(0.4, 2, 0.55, 0.44);
}

.hour-hand {
  width: 6px;
  height: 55px;
  background: var(--text-title, #1e293b);
  margin-left: -3px;
  z-index: 8;
}

.minute-hand {
  width: 3.5px;
  height: 78px;
  background: #ef4444;
  margin-left: -1.75px;
  z-index: 9;
}

.clock-details {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.digital-display {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.digital-time {
  font-family: 'Outfit', sans-serif;
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text-title, #0f172a);
  letter-spacing: 1px;
}

.period-badge {
  background: #dbeafe;
  color: #1d4ed8;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
}

.time-presets {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
}

.preset-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted, #64748b);
  margin-right: 0.25rem;
}

.time-presets button {
  background: var(--surface-2, #f1f5f9);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 6px;
  padding: 0.3rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-body, #334155);
  cursor: pointer;
  transition: all 0.2s;
}

.time-presets button:hover {
  background: var(--primary, #4f46e5);
  color: white;
  border-color: var(--primary, #4f46e5);
}

.sliders-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.slider-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted, #64748b);
  margin-bottom: 0.25rem;
}

.slider-group input[type="range"] {
  width: 100%;
  accent-color: var(--primary, #4f46e5);
  cursor: pointer;
}

.reading-results {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.reading-box {
  border-radius: 0.85rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.reading-box.easy {
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
}

.reading-box.formal {
  background: #eff6ff;
  border: 1px solid #bfdbfe;
}

.box-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted, #475569);
}

.box-text {
  font-family: 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-title, #0f172a);
}

@media (max-width: 768px) {
  .simulator-card {
    grid-template-columns: 1fr;
  }
  .sliders-container, .reading-results {
    grid-template-columns: 1fr;
  }
}
</style>
