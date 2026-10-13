<template>
  <div class="calendar-practice">
    <div class="practice-tabs">
      <button 
        :class="{ active: currentTab === 'days' }" 
        @click="currentTab = 'days'"
      >
        🗓️ Hari (Days)
      </button>
      <button 
        :class="{ active: currentTab === 'months' }" 
        @click="currentTab = 'months'"
      >
        🌙 Bulan (Months)
      </button>
      <button 
        :class="{ active: currentTab === 'years' }" 
        @click="currentTab = 'years'"
      >
        ⏳ Trik Membaca Tahun
      </button>
    </div>

    <!-- Days Tab -->
    <div v-if="currentTab === 'days'" class="tab-content">
      <div class="rule-reminder">
        💡 <strong>Rumus Emas:</strong> Nama hari SELALU memakai preposisi <code>ON</code> (contoh: <em>I go swimming on Sunday</em>).
      </div>
      <div class="cards-grid">
        <div v-for="d in daysData" :key="d.en" class="cal-card">
          <div class="cal-top">
            <span class="cal-prep">ON</span>
            <span class="cal-day">{{ d.en }}</span>
          </div>
          <div class="cal-id">{{ d.id }}</div>
          <div class="cal-phonetic">/{{ d.pronounce }}/</div>
          <div class="cal-footer">
            <AudioButton :text="`On ${d.en}. ${d.sample}`" :mini="true" />
          </div>
        </div>
      </div>
    </div>

    <!-- Months Tab -->
    <div v-if="currentTab === 'months'" class="tab-content">
      <div class="rule-reminder">
        💡 <strong>Rumus Emas:</strong> Jika hanya menyebut nama bulan tanpa tanggal, gunakan preposisi <code>IN</code> (contoh: <em>in August</em>).
      </div>
      <div class="cards-grid">
        <div v-for="(m, i) in monthsData" :key="m.en" class="cal-card">
          <div class="cal-top">
            <span class="cal-prep">IN</span>
            <span class="cal-day">{{ m.en }}</span>
          </div>
          <div class="cal-id">Bulan ke-{{ i + 1 }}</div>
          <div class="cal-footer">
            <AudioButton :text="`In ${m.en}.`" :mini="true" />
          </div>
        </div>
      </div>
    </div>

    <!-- Years Tab -->
    <div v-if="currentTab === 'years'" class="tab-content">
      <div class="rule-reminder">
        💡 <strong>Trik Belah Dua:</strong> Belah 4 digit tahun menjadi dua pasang angka agar sangat mudah dibaca!
      </div>
      <div class="years-list">
        <div v-for="y in yearsData" :key="y.year" class="year-item">
          <div class="year-digits">
            <span class="part-1">{{ y.p1 }}</span>
            <span class="part-2">{{ y.p2 }}</span>
            <span class="full-year">({{ y.year }})</span>
          </div>
          <div class="year-spoken">
            Dibaca: <strong>{{ y.spoken }}</strong>
          </div>
          <AudioButton :text="y.spoken" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AudioButton from './AudioButton.vue';

const currentTab = ref('days');

const daysData = [
  { en: 'Monday', id: 'Senin', pronounce: 'ˈmʌndei', sample: 'I work on Monday.' },
  { en: 'Tuesday', id: 'Selasa', pronounce: 'ˈtjuːzdei', sample: 'See you on Tuesday.' },
  { en: 'Wednesday', id: 'Rabu', pronounce: 'ˈwenzdei', sample: 'We meet on Wednesday.' },
  { en: 'Thursday', id: 'Kamis', pronounce: 'ˈθɜːrzdei', sample: 'Gym on Thursday.' },
  { en: 'Friday', id: 'Jumat', pronounce: 'ˈfraidei', sample: 'Happy Friday!' },
  { en: 'Saturday', id: 'Sabtu', pronounce: 'ˈsætərdei', sample: 'Party on Saturday.' },
  { en: 'Sunday', id: 'Minggu', pronounce: 'ˈsʌndei', sample: 'Relax on Sunday.' }
];

const monthsData = [
  { en: 'January' }, { en: 'February' }, { en: 'March' },
  { en: 'April' }, { en: 'May' }, { en: 'June' },
  { en: 'July' }, { en: 'August' }, { en: 'September' },
  { en: 'October' }, { en: 'November' }, { en: 'December' }
];

const yearsData = [
  { year: '1945', p1: '19 (Nineteen)', p2: '45 (Forty-five)', spoken: 'Nineteen forty-five' },
  { year: '1998', p1: '19 (Nineteen)', p2: '98 (Ninety-eight)', spoken: 'Nineteen ninety-eight' },
  { year: '2010', p1: '20 (Twenty)', p2: '10 (Ten)', spoken: 'Twenty ten' },
  { year: '2026', p1: '20 (Twenty)', p2: '26 (Twenty-six)', spoken: 'Twenty twenty-six' }
];
</script>

<style scoped>
.calendar-practice {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1rem;
}

.practice-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.practice-tabs button {
  background: var(--surface-2, #f1f5f9);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 9999px;
  padding: 0.5rem 1.1rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-body, #334155);
  cursor: pointer;
  transition: all 0.2s;
}

.practice-tabs button.active {
  background: var(--primary, #4f46e5);
  color: white;
  border-color: var(--primary, #4f46e5);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
}

.rule-reminder {
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  color: #92400e;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.9rem;
}

.cal-card {
  background: var(--surface, #ffffff);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 0.85rem;
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s;
}

.cal-card:hover {
  transform: translateY(-2px);
  border-color: var(--primary, #4f46e5);
}

.cal-top {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.cal-prep {
  font-size: 0.7rem;
  font-weight: 800;
  background: #e0e7ff;
  color: #3730a3;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
}

.cal-day {
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--text-title, #0f172a);
}

.cal-id {
  font-size: 0.8rem;
  color: var(--text-muted, #64748b);
}

.cal-phonetic {
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  color: var(--primary, #4f46e5);
}

.cal-footer {
  margin-top: 0.4rem;
}

.years-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.year-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--surface, #ffffff);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
}

.year-digits {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.part-1, .part-2 {
  background: #f1f5f9;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
}

.part-1 { color: #2563eb; }
.part-2 { color: #d97706; }

.full-year {
  font-size: 0.85rem;
  color: #64748b;
}

.year-spoken {
  font-size: 1rem;
  color: var(--text-title, #0f172a);
}

@media (max-width: 640px) {
  .year-item {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
