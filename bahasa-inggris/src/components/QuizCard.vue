<template>
  <div class="quiz-container">
    <div class="quiz-header">
      <div class="quiz-title">
        <span class="quiz-icon">📝</span>
        <h3>Uji Pemahaman Cepat</h3>
      </div>
      <div class="quiz-progress-text">
        Soal {{ currentStep + 1 }} dari {{ questions.length }}
      </div>
    </div>

    <div v-if="!isFinished" class="question-body">
      <div class="question-text">
        {{ currentQuestion.question }}
      </div>

      <div class="options-grid">
        <button
          v-for="(opt, idx) in currentQuestion.options"
          :key="idx"
          class="option-btn"
          :class="{
            'selected': selectedOption === idx,
            'correct': hasSubmitted && idx === currentQuestion.answerIndex,
            'wrong': hasSubmitted && selectedOption === idx && idx !== currentQuestion.answerIndex,
            'disabled': hasSubmitted
          }"
          :disabled="hasSubmitted"
          @click="selectOption(idx)"
        >
          <span class="option-letter">{{ ['A', 'B', 'C', 'D'][idx] }}</span>
          <span class="option-label">{{ opt }}</span>
        </button>
      </div>

      <!-- Feedback Area -->
      <div v-if="hasSubmitted" class="feedback-box" :class="{ 'is-correct': isCorrect }">
        <div class="feedback-heading">
          <span v-if="isCorrect">🎉 Jawaban Benar!</span>
          <span v-else>💡 Jawaban Belum Tepat</span>
        </div>
        <p class="explanation-text">{{ currentQuestion.explanation }}</p>
        <button class="next-btn" @click="handleNext">
          {{ currentStep + 1 < questions.length ? 'Soal Berikutnya ➡️' : 'Lihat Hasil Akhir 🏆' }}
        </button>
      </div>
    </div>

    <!-- Finished Screen -->
    <div v-else class="completion-card">
      <div class="trophy-icon">🏆</div>
      <h3>Hebat! Kamu Menyelesaikan Latihan</h3>
      <p class="score-line">
        Skor Kamu: <strong>{{ score }} / {{ questions.length }}</strong>
      </p>
      <p class="encourage-text">
        {{ score === questions.length ? 'Luar biasa! Pemahaman fondasi kamu di materi ini sudah sempurna!' : 'Bagus sekali! Jangan ragu mengulang untuk memantapkan pemahaman.' }}
      </p>
      <div class="finish-actions">
        <button class="restart-btn" @click="restartQuiz">🔄 Coba Lagi</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import confetti from 'canvas-confetti';

const props = defineProps({
  moduleId: {
    type: Number,
    required: true
  },
  questions: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['completed']);

const currentStep = ref(0);
const selectedOption = ref(null);
const hasSubmitted = ref(false);
const isCorrect = ref(false);
const score = ref(0);
const isFinished = ref(false);

const currentQuestion = computed(() => props.questions[currentStep.value] || {});

function selectOption(idx) {
  if (hasSubmitted.value) return;
  selectedOption.value = idx;
  hasSubmitted.value = true;
  if (idx === currentQuestion.value.answerIndex) {
    isCorrect.value = true;
    score.value++;
  } else {
    isCorrect.value = false;
  }
}

function handleNext() {
  if (currentStep.value + 1 < props.questions.length) {
    currentStep.value++;
    selectedOption.value = null;
    hasSubmitted.value = false;
    isCorrect.value = false;
  } else {
    isFinished.value = true;
    if (score.value >= props.questions.length / 2) {
      triggerConfetti();
      emit('completed', props.moduleId);
    }
  }
}

function restartQuiz() {
  currentStep.value = 0;
  selectedOption.value = null;
  hasSubmitted.value = false;
  isCorrect.value = false;
  score.value = 0;
  isFinished.value = false;
}

function triggerConfetti() {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  } catch (e) {
    // fallback
  }
}
</script>

<style scoped>
.quiz-container {
  background: var(--surface, #ffffff);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 1.25rem;
  padding: 1.75rem;
  margin-top: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color, #f1f5f9);
  padding-bottom: 1rem;
  margin-bottom: 1.25rem;
}

.quiz-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quiz-title h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-title, #0f172a);
}

.quiz-progress-text {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted, #64748b);
  background: var(--surface-2, #f1f5f9);
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
}

.question-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-title, #1e293b);
  margin-bottom: 1.25rem;
  line-height: 1.5;
}

.options-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.65rem;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  text-align: left;
  padding: 0.85rem 1.1rem;
  border-radius: 0.75rem;
  border: 1.5px solid var(--border-color, #e2e8f0);
  background: var(--surface, #ffffff);
  cursor: pointer;
  font-size: 0.95rem;
  color: var(--text-body, #334155);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.option-btn:hover:not(:disabled) {
  border-color: var(--primary, #4f46e5);
  background: var(--accent-light, #eef2ff);
  transform: translateX(4px);
}

.option-letter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--surface-2, #f1f5f9);
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--text-muted, #64748b);
}

.option-btn.correct {
  border-color: #10b981;
  background: #ecfdf5;
  color: #065f46;
}

.option-btn.correct .option-letter {
  background: #10b981;
  color: white;
}

.option-btn.wrong {
  border-color: #ef4444;
  background: #fef2f2;
  color: #991b1b;
}

.option-btn.wrong .option-letter {
  background: #ef4444;
  color: white;
}

.feedback-box {
  margin-top: 1.25rem;
  padding: 1.25rem;
  border-radius: 0.85rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  animation: fadeIn 0.3s ease;
}

.feedback-box.is-correct {
  background: #ecfdf5;
  border-color: #a7f3d0;
}

.feedback-heading {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.35rem;
}

.explanation-text {
  font-size: 0.9rem;
  color: var(--text-body, #334155);
  line-height: 1.45;
  margin-bottom: 1rem;
}

.next-btn {
  background: var(--primary, #4f46e5);
  color: white;
  border: none;
  padding: 0.6rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.next-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.completion-card {
  text-align: center;
  padding: 1.5rem 0;
}

.trophy-icon {
  font-size: 3.5rem;
  margin-bottom: 0.75rem;
}

.score-line {
  font-size: 1.25rem;
  margin: 0.5rem 0;
  color: var(--text-title, #0f172a);
}

.encourage-text {
  color: var(--text-muted, #64748b);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.restart-btn {
  background: var(--surface-2, #f1f5f9);
  border: 1px solid var(--border-color, #cbd5e1);
  padding: 0.6rem 1.2rem;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.restart-btn:hover {
  background: var(--surface, #ffffff);
  border-color: var(--primary, #4f46e5);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
