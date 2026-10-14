<script setup lang="ts">
export interface CustomerData {
  name: string;
  phone: string;
  address: string;
  notes: string;
}

defineProps<{
  customer: CustomerData;
  errors: Record<string, string>;
}>();
</script>

<template>
  <div class="checkout-card form-card">
    <div class="card-header">
      <span class="step-num">1</span>
      <div>
        <h2 class="card-title">Informasi Penerima & Alamat Antar</h2>
        <p class="card-subtitle">Kurir kami akan menghubungi dan mengantarkan makanan ke alamat ini</p>
      </div>
    </div>

    <div class="form-grid">
      <!-- Nama Lengkap -->
      <div class="form-group" :class="{ 'has-error': errors.name }">
        <label for="cust-name" class="form-label">
          Nama Penerima <span class="required">*</span>
        </label>
        <input
          id="cust-name"
          v-model="customer.name"
          type="text"
          class="form-input"
          placeholder="Contoh: Muhammad Rayhan"
        />
        <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
      </div>

      <!-- No WhatsApp / Telepon -->
      <div class="form-group" :class="{ 'has-error': errors.phone }">
        <label for="cust-phone" class="form-label">
          Nomor WhatsApp / HP <span class="required">*</span>
        </label>
        <input
          id="cust-phone"
          v-model="customer.phone"
          type="tel"
          class="form-input"
          placeholder="Contoh: 081234567890"
        />
        <span v-if="errors.phone" class="error-msg">{{ errors.phone }}</span>
      </div>

      <!-- Alamat Lengkap -->
      <div class="form-group full-width" :class="{ 'has-error': errors.address }">
        <label for="cust-address" class="form-label">
          Alamat Lengkap Pengiriman <span class="required">*</span>
        </label>
        <textarea
          id="cust-address"
          v-model="customer.address"
          rows="3"
          class="form-textarea"
          placeholder="Jl. Mawar No. 12, RT 01/RW 02, Kelurahan / Kecamatan..."
        ></textarea>
        <span v-if="errors.address" class="error-msg">{{ errors.address }}</span>
      </div>

      <!-- Patokan / Catatan Alamat -->
      <div class="form-group full-width">
        <label for="cust-notes" class="form-label">
          Patokan / Catatan Rumah <span class="optional">(Opsional)</span>
        </label>
        <input
          id="cust-notes"
          v-model="customer.notes"
          type="text"
          class="form-input"
          placeholder="Contoh: Rumah cat hijau samping masjid, pagar hitam"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout-card {
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  padding: 1.75rem;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
  margin-bottom: 1.5rem;
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed #e2e8f0;
}

.step-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b35 0%, #ff3d00 100%);
  color: #ffffff;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  flex-shrink: 0;
}

.card-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.2rem;
}

.card-subtitle {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
}

@media (min-width: 600px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.full-width {
  grid-column: 1 / -1;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-size: 0.825rem;
  font-weight: 700;
  color: #334155;
}

.required {
  color: #dc2626;
}

.optional {
  font-weight: 500;
  color: #94a3b8;
  font-size: 0.775rem;
}

.form-input,
.form-textarea {
  width: 100%;
  box-sizing: border-box;
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  font-family: inherit;
  font-size: 0.875rem;
  color: #1e293b;
  outline: none;
  transition: all 0.2s ease;
}

.form-input:focus,
.form-textarea:focus {
  background-color: #ffffff;
  border-color: #ff5a1f;
  box-shadow: 0 0 0 3px rgba(255, 90, 31, 0.15);
}

.has-error .form-input,
.has-error .form-textarea {
  border-color: #ef4444;
  background-color: #fef2f2;
}

.error-msg {
  font-size: 0.75rem;
  color: #dc2626;
  font-weight: 600;
}
</style>
