
document.addEventListener("DOMContentLoaded", function () {

    const backToTop = document.getElementById("backToTop");

    if (!backToTop) return;

    // Tampilkan tombol setelah scroll 300px
    function toggleBackToTop() {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    }

    // Pantau posisi scroll
    window.addEventListener(
        "scroll",
        toggleBackToTop,
        { passive: true }
    );

    // Kembali ke bagian atas
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Periksa posisi awal halaman
    toggleBackToTop();

});

/* Sintaks kuis */
window.initAljabarQuiz = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Helper untuk angka acak antara min dan max
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Generator Soal Dinamis Berbasis Template & Angka Acak Komputer
  function generateDynamicQuestion(level, type) {
    let q = {}, a1, a2, a3, val;

    if (level === 'mudah' && type === 'polos') {
      // Variasi Soal Polos Mudah: Menentukan koefisien/konstanta dengan angka acak
      a1 = getRandomInt(2, 9);
      a2 = getRandomInt(1, 20);
      const variants = [
        {
          question: `Tentukan koefisien dari variabel \\(x\\) pada bentuk aljabar \\(${a1}x + ${a2}\\)?`,
          options: [a2.toString(), "1", a1.toString(), "0"],
          answer: 2,
          explanation: `Koefisien adalah angka yang melekat di depan variabel \\(x\\), yaitu \\(${a1}\\).`
        },
        {
          question: `Tentukan konstanta dari bentuk aljabar \\(${a1}x - ${a2}\\)?`,
          options: [a1.toString(), `-${a2}`, a2.toString(), "Tidak ada"],
          answer: 1,
          explanation: `Konstanta adalah suku yang tidak memuat variabel dan berdiri sendiri, yaitu \\(-${a2}\\).`
        }
      ];
      return variants[Math.floor(Math.random() * variants.length)];
    }

    else if (level === 'mudah' && type === 'cerita') {
      // Variasi Soal Cerita Mudah: Pembelian barang dengan harga acak
      a1 = getRandomInt(2, 10);
      return {
        question: `Harga satu buah buku tulis adalah \\(x\\) rupiah. Jika seseorang membeli \\(${a1}\\) buku tulis tersebut, bentuk aljabar total harganya adalah...`,
        options: [`x + ${a1}`, `${a1}x`, `${a1} + x`, `x - ${a1}`],
        answer: 1,
        explanation: `Pembelian beberapa barang sejenis dinyatakan dengan perkalian antara jumlah barang dan harga satuannya, yaitu \\(${a1}x\\).`
      };
    }

    else if (level === 'menengah' && type === 'polos') {
      // Variasi Soal Menengah Polos: Penjumlahan suku sejenis dengan angka acak
      a1 = getRandomInt(2, 8);
      a2 = getRandomInt(3, 9);
      a3 = getRandomInt(1, 5);
      let total = a1 + a2 - a3;
      return {
        question: `Sederhanakan bentuk aljabar berikut: \\(${a1}x + ${a2}x - ${a3}x\\).`,
        options: [`${total + 2}x`, `${total}x`, `${total - 1}x`, `${total * 2}x`],
        answer: 1,
        explanation: `Jumlahkan koefisien suku-suku sejenis: \\(${a1} + ${a2} - ${a3} = ${total}\\), sehingga hasilnya \\(${total}x\\).`
      };
    }

    else if (level === 'menengah' && type === 'cerita') {
      // Variasi Soal Cerita Menengah: Umur di masa depan
      a1 = getRandomInt(3, 12);
      return {
        question: `Umur Budi sekarang adalah \\(z\\) tahun. Berapa umur Budi \\(${a1}\\) tahun mendatang?`,
        options: [`${a1}z`, `z - ${a1}`, `z + ${a1}`, `${a1} - z`],
        answer: 2,
        explanation: `Frasa 'tahun mendatang' menyatakan masa depan atau penambahan usia, sehingga ditulis \\(z + ${a1}\\).`
      };
    }

    else if (level === 'sulit' && type === 'polos') {
      // Variasi Soal Sulit Polos: Substitusi nilai variabel
      a1 = getRandomInt(2, 5);
      a2 = getRandomInt(1, 10);
      val = getRandomInt(2, 5);
      let hasil = (a1 * val) + a2;
      return {
        question: `Berapakah nilai dari bentuk aljabar \\(${a1}x + ${a2}\\) jika diketahui \\(x = ${val}\\)?`,
        options: [(hasil - 3).toString(), hasil.toString(), (hasil + 4).toString(), (hasil * 2).toString()],
        answer: 1,
        explanation: `Substitusikan \\(x = ${val}\\) ke dalam \\(${a1}(${val}) + ${a2} = ${a1 * val} + ${a2} = ${hasil}\\).`
      };
    }

    else {
      // Variasi Soal Cerita Sulit: Keliling persegi panjang dengan aljabar
      a1 = getRandomInt(2, 5);
      a2 = getRandomInt(1, 6);
      return {
        question: `Sebuah kebun berbentuk persegi panjang memiliki panjang \\((${a1}x + ${a2})\\) meter dan lebar \\(x\\) meter. Bentuk aljabar keliling kebun tersebut adalah...`,
        options: [`${(a1+1)*2}x + ${a2*2}`, `${(a1*2)+2}x + ${a2*2}`, `${a1*2}x + ${a2}`, `${a1}x + ${a2*2}`],
        answer: 1,
        explanation: `Rumus keliling \\( = 2(p + l) = 2((${a1}x + ${a2}) + x) = 2(${a1+1}x + ${a2}) = ${(a1+1)*2}x + ${a2*2}\\). (Catatan: perhatikan distribusi koefisiennya).`
      };
    }
  }

  let currentLevel = 'mudah';
  let currentType = 'polos';
  let currentQuestion = null;
  let answered = false;

  // Render Struktur Kuis ke dalam Satu Kontainer Utuh
  container.innerHTML = `
    <div class="quiz-header">
      <h3>Kuis Pemahaman Aljabar Dasar</h3>
      <p>Pilih level dan tipe soal untuk mulai berlatih secara dinamis!</p>
      
      <div class="quiz-controls">
        <div class="control-group" id="level-selectors">
          <span style="font-size: 0.8rem; font-weight: bold; align-self: center; margin-right: 4px;">Level:</span>
          <button class="ctrl-btn active" data-level="mudah">Mudah</button>
          <button class="ctrl-btn" data-level="menengah">Menengah</button>
          <button class="ctrl-btn" data-level="sulit">Sulit</button>
        </div>
        
        <div class="control-group" id="type-selectors">
          <span style="font-size: 0.8rem; font-weight: bold; align-self: center; margin-right: 4px;">Tipe:</span>
          <button class="ctrl-btn active" data-type="polos">Soal Polos</button>
          <button class="ctrl-btn" data-type="cerita">Soal Cerita</button>
        </div>
      </div>
    </div>
    <div id="quiz-body"></div>
  `;

  const bodyEl = container.querySelector('#quiz-body');

  function loadNewQuestion() {
    answered = false;
    // Panggil generator dinamis berdasarkan level dan tipe yang dipilih pengguna
    currentQuestion = generateDynamicQuestion(currentLevel, currentType);

    bodyEl.innerHTML = `
      <div class="quiz-card">
        <div style="font-size: 0.75rem; font-weight: 700; color: #4a5568; margin-bottom: 6px; text-transform: uppercase;">
          Latihan Dinamis (${currentLevel.toUpperCase()} - ${currentType.toUpperCase()})
        </div>
        <div class="quiz-question">${currentQuestion.question}</div>
        <div class="quiz-options">
          ${currentQuestion.options.map((opt, idx) => `
            <button class="quiz-option-btn" data-index="${idx}">${opt}</button>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="quiz-feedback"></div>
      </div>
      <div class="quiz-footer">
        <button class="quiz-next-btn" id="quiz-next-btn">Soal Berikutnya ➔</button>
      </div>
    `;

    // Render ulang MathJax agar simbol LaTeX di dalam teks soal terbaca dengan baik
    if (window.MathJax && typeof MathJax.typeset === 'function') {
      MathJax.typeset([bodyEl]);
    }

    // Event listener pilihan jawaban
    const optionBtns = bodyEl.querySelectorAll('.quiz-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (answered) return;
        answered = true;
        const selectedIdx = parseInt(e.target.getAttribute('data-index'));
        const correctIdx = currentQuestion.answer;
        const feedbackEl = bodyEl.querySelector('#quiz-feedback');
        const nextBtn = bodyEl.querySelector('#quiz-next-btn');

        if (selectedIdx === correctIdx) {
          e.target.classList.add('correct');
          feedbackEl.className = "quiz-feedback show correct-feedback";
          feedbackEl.innerHTML = `<strong>Bagus Sekali!</strong> Jawaban Anda benar.`;
        } else {
          e.target.classList.add('incorrect');
          optionBtns[correctIdx].classList.add('correct');
          feedbackEl.className = "quiz-feedback show incorrect-feedback";
          feedbackEl.innerHTML = `<strong>Belum Tepat.</strong> Petunjuk Evaluasi: ${currentQuestion.explanation}`;
        }

        optionBtns.forEach(b => b.disabled = true);
        nextBtn.style.display = 'block';

        if (window.MathJax && typeof MathJax.typeset === 'function') {
          MathJax.typeset([feedbackEl]);
        }
      });
    });

    bodyEl.querySelector('#quiz-next-btn').addEventListener('click', () => {
      loadNewQuestion();
    });
  }

  container.querySelectorAll('#level-selectors .ctrl-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      container.querySelectorAll('#level-selectors .ctrl-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentLevel = e.target.getAttribute('data-level');
      loadNewQuestion();
    });
  });

  container.querySelectorAll('#type-selectors .ctrl-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      container.querySelectorAll('#type-selectors .ctrl-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentType = e.target.getAttribute('data-type');
      loadNewQuestion();
    });
  });

  loadNewQuestion();
};

document.addEventListener("DOMContentLoaded", function() {
  initAljabarQuiz('interaktif-aljabar-quiz');
});
