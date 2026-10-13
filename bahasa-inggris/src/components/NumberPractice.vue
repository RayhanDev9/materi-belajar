<template>
  <div class="number-practice">
    <!-- Interactive Number to Word Converter -->
    <div class="converter-box">
      <div class="converter-header">
        <span class="converter-icon">🪄</span>
        <div class="converter-text">
          <h4>Ketik Angka Berapa Saja (0 - 999.999):</h4>
          <p>Lihat bagaimana angka tersebut diucapkan dalam bahasa Inggris seketika!</p>
        </div>
      </div>
      <div class="input-row">
        <input 
          type="number" 
          v-model.number="testNumber" 
          min="0" 
          max="999999"
          placeholder="Misal: 45"
        />
        <div class="converter-output">
          <div class="words-result">{{ convertedWord }}</div>
          <AudioButton :text="convertedWord" label="Dengarkan Angka Ini" />
        </div>
      </div>
    </div>

    <!-- The 14 vs 40 Trap Alert Card -->
    <div class="trap-card">
      <div class="trap-header">
        <span class="trap-badge">⚠️ Waspada Jebakan Populer</span>
        <h4>Perbedaan 14 (Fourteen) vs 40 (Forty)</h4>
      </div>
      <div class="trap-comparison">
        <div class="trap-col">
          <div class="trap-num">14</div>
          <div class="trap-spelling">F-O-<strong>U</strong>-R-T-E-E-N</div>
          <div class="trap-note">Ada huruf "U". Intonasi panjang di "teen".</div>
          <AudioButton text="Fourteen" :mini="true" />
        </div>
        <div class="trap-vs">VS</div>
        <div class="trap-col">
          <div class="trap-num">40</div>
          <div class="trap-spelling">F-O-R-T-Y</div>
          <div class="trap-note"><span class="highlight">Huruf "U" HILANG!</span> Intonasi pendek di awal.</div>
          <AudioButton text="Forty" :mini="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AudioButton from './AudioButton.vue';

const testNumber = ref(25);

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function numberToEnglish(num) {
  if (num === 0) return 'Zero';
  if (num < 0) return 'Negative ' + numberToEnglish(Math.abs(num));
  if (isNaN(num)) return 'Masukkan angka valid';

  function convertBelowThousand(n) {
    if (n === 0) return '';
    if (n < 10) return ones[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) {
      const remainder = n % 10;
      return tens[Math.floor(n / 10)] + (remainder !== 0 ? '-' + ones[remainder] : '');
    }
    const hundredPart = ones[Math.floor(n / 100)] + ' hundred';
    const rest = n % 100;
    return hundredPart + (rest !== 0 ? ' and ' + convertBelowThousand(rest) : '');
  }

  let result = '';
  if (num >= 1000) {
    const thousands = Math.floor(num / 1000);
    result += convertBelowThousand(thousands) + ' thousand ';
    num %= 1000;
  }
  if (num > 0) {
    result += convertBelowThousand(num);
  }

  const trimmed = result.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

const convertedWord = computed(() => {
  return numberToEnglish(testNumber.value || 0);
});
</script>

<style scoped>
.number-practice {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.converter-box {
  background: linear-gradient(135deg, #f8fafc, #edf2f7);
  border: 1.5px solid var(--border-color, #cbd5e1);
  border-radius: 1.25rem;
  padding: 1.5rem;
}

.converter-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.converter-icon {
  font-size: 2rem;
}

.converter-text h4 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-title, #0f172a);
}

.converter-text p {
  font-size: 0.85rem;
  color: var(--text-muted, #64748b);
}

.input-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.input-row input {
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  width: 160px;
  padding: 0.6rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid var(--primary, #4f46e5);
  background: var(--surface, #ffffff);
  color: var(--text-title, #0f172a);
  outline: none;
}

.converter-output {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--surface, #ffffff);
  border: 1px solid var(--border-color, #e2e8f0);
  padding: 0.75rem 1.25rem;
  border-radius: 0.75rem;
}

.words-result {
  font-family: 'Outfit', sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--primary, #4f46e5);
}

.trap-card {
  background: var(--surface, #ffffff);
  border: 1.5px solid #fed7aa;
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(249, 115, 22, 0.05);
}

.trap-badge {
  font-size: 0.75rem;
  font-weight: 700;
  background: #ffedd5;
  color: #c2410c;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  display: inline-block;
  margin-bottom: 0.4rem;
}

.trap-header h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-title, #0f172a);
  margin-bottom: 1rem;
}

.trap-comparison {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.5rem;
}

.trap-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.35rem;
}

.trap-num {
  font-family: 'Outfit', sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  color: #ea580c;
}

.trap-spelling {
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  font-weight: 700;
  color: #1e293b;
}

.trap-spelling strong {
  color: #dc2626;
  text-decoration: underline;
}

.trap-note {
  font-size: 0.8rem;
  color: var(--text-muted, #64748b);
  max-width: 180px;
}

.trap-note .highlight {
  color: #dc2626;
  font-weight: 700;
}

.trap-vs {
  font-weight: 900;
  font-size: 1.25rem;
  color: #cbd5e1;
}

@media (max-width: 640px) {
  .converter-output {
    width: 100%;
  }
  .trap-comparison {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
