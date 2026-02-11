const QUESTION_BANK = [
  {
    id: 1,
    topic: "Cloud Concepts",
    level: "easy",
    prompt: "Qual descrição representa melhor o modelo de responsabilidade compartilhada na nuvem?",
    choices: [
      "O cliente nunca é responsável por segurança em qualquer modelo.",
      "A Microsoft e o cliente dividem responsabilidades dependendo do serviço (IaaS, PaaS, SaaS).",
      "A Microsoft sempre gerencia identidade e acesso do usuário final.",
      "O cliente só gerencia custo e nada mais."
    ],
    answer: 1,
    explanation:
      "No Azure, a responsabilidade varia por tipo de serviço. Quanto mais gerenciado o serviço, menor a responsabilidade operacional do cliente."
  },
  {
    id: 2,
    topic: "Cloud Concepts",
    level: "easy",
    prompt: "Qual característica é típica de alta disponibilidade no Azure?",
    choices: [
      "Usar sempre apenas uma VM para simplificar.",
      "Distribuir recursos para reduzir impacto de falhas únicas.",
      "Evitar regiões diferentes para não aumentar latência.",
      "Desativar backup automático."
    ],
    answer: 1,
    explanation: "Alta disponibilidade busca continuidade com redundância e desenho resiliente."
  },
  {
    id: 3,
    topic: "Cloud Concepts",
    level: "easy",
    prompt: "Qual benefício se conecta diretamente com elasticidade em cloud?",
    choices: [
      "Aumentar ou reduzir recursos de acordo com demanda.",
      "Comprar servidores para 5 anos de pico.",
      "Fixar capacidade para evitar alteração de custo.",
      "Remover monitoramento para reduzir uso de CPU."
    ],
    answer: 0,
    explanation: "Elasticidade permite ajuste dinâmico conforme necessidade real."
  },
  {
    id: 4,
    topic: "Core Azure Services",
    level: "medium",
    prompt: "Qual serviço é mais adequado para hospedar máquinas virtuais no Azure?",
    choices: ["Azure Functions", "Azure Virtual Machines", "Azure Cosmos DB", "Azure Key Vault"],
    answer: 1,
    explanation: "Azure Virtual Machines oferece IaaS para sistemas e workloads com controle de SO."
  },
  {
    id: 5,
    topic: "Core Azure Services",
    level: "medium",
    prompt: "Você quer executar código sem gerenciar servidor. Qual serviço combina melhor?",
    choices: ["Azure Functions", "Azure Load Balancer", "Azure Disk Storage", "Azure Firewall"],
    answer: 0,
    explanation: "Azure Functions é serverless e foca em execução orientada a eventos."
  },
  {
    id: 6,
    topic: "Core Azure Services",
    level: "medium",
    prompt: "Qual serviço oferece armazenamento de objetos não estruturados em grande escala?",
    choices: ["Azure Blob Storage", "Azure Queue", "Azure App Service Plan", "Azure Bastion"],
    answer: 0,
    explanation: "Blob Storage é voltado para arquivos, mídia, backup e dados não estruturados."
  },
  {
    id: 7,
    topic: "Security",
    level: "medium",
    prompt: "Qual serviço Azure é usado para armazenar segredos, chaves e certificados com segurança?",
    choices: ["Azure Key Vault", "Azure Policy", "Azure DevOps", "Azure Advisor"],
    answer: 0,
    explanation: "Key Vault centraliza e protege segredos com controle de acesso robusto."
  },
  {
    id: 8,
    topic: "Security",
    level: "medium",
    prompt: "No contexto de identidade, qual solução gerencia autenticação e autorização no Azure?",
    choices: ["Microsoft Entra ID", "Azure Monitor", "Azure Site Recovery", "Azure Databricks"],
    answer: 0,
    explanation: "Microsoft Entra ID (ex-Azure AD) gerencia identidade e acesso."
  },
  {
    id: 9,
    topic: "Governance",
    level: "hard",
    prompt: "Qual recurso ajuda a impor padrões e compliance automaticamente em recursos Azure?",
    choices: ["Azure Policy", "Azure Cost Management", "Azure SQL", "Azure CDN"],
    answer: 0,
    explanation: "Azure Policy define e aplica regras organizacionais em escala."
  },
  {
    id: 10,
    topic: "Governance",
    level: "hard",
    prompt: "Qual opção organiza recursos e permite aplicar permissões para conjuntos de recursos?",
    choices: ["Resource Group", "Availability Set", "Zone", "Marketplace"],
    answer: 0,
    explanation: "Resource Group agrupa recursos para gestão, ciclo de vida e controle de acesso."
  },
  {
    id: 11,
    topic: "Pricing & SLA",
    level: "medium",
    prompt: "Qual ferramenta ajuda a estimar custo antes de criar recursos?",
    choices: ["Azure Pricing Calculator", "Azure Bastion", "Azure DNS", "Azure Arc"],
    answer: 0,
    explanation: "Pricing Calculator permite simular custo estimado por serviço e região."
  },
  {
    id: 12,
    topic: "Pricing & SLA",
    level: "medium",
    prompt: "No AZ-900, SLA indica principalmente:",
    choices: [
      "Número de usuários por assinatura",
      "Compromisso contratual de disponibilidade do serviço",
      "Quantidade mínima de VMs",
      "Tempo de deploy de uma aplicação"
    ],
    answer: 1,
    explanation: "SLA descreve compromisso de disponibilidade (por exemplo 99,9%)."
  },
  {
    id: 13,
    topic: "Cloud Concepts",
    level: "easy",
    prompt: "Qual opção ilustra CapEx vs OpEx de forma correta?",
    choices: [
      "CapEx é pagamento conforme uso por hora.",
      "OpEx é investimento inicial em data center próprio.",
      "CapEx é gasto inicial alto; OpEx é gasto operacional recorrente conforme consumo.",
      "CapEx e OpEx são sinônimos em cloud."
    ],
    answer: 2,
    explanation: "Em cloud, OpEx tende a predominar com cobrança por consumo."
  },
  {
    id: 14,
    topic: "Core Azure Services",
    level: "hard",
    prompt: "Qual serviço distribui tráfego globalmente com roteamento baseado em desempenho e geografia?",
    choices: ["Azure Traffic Manager", "Azure VM Scale Set", "Azure Logic Apps", "Azure Files"],
    answer: 0,
    explanation: "Traffic Manager trabalha em nível DNS para roteamento global entre endpoints."
  },
  {
    id: 15,
    topic: "Security",
    level: "hard",
    prompt: "Qual solução fornece postura de segurança e recomendações centralizadas para recursos Azure?",
    choices: ["Microsoft Defender for Cloud", "Azure Boards", "Azure Backup Vault", "Azure Synapse"],
    answer: 0,
    explanation: "Defender for Cloud avalia postura e oferece recomendações e proteção."
  }
];

const state = {
  mode: "home",
  quizLength: 10,
  selectedQuestions: [],
  currentIndex: 0,
  score: 0,
  answers: [],
  startedAt: null,
  aiConfig: loadAiConfig()
};

const screenArea = document.getElementById("screenArea");
const settingsDialog = document.getElementById("settingsDialog");
const openSettingsBtn = document.getElementById("openSettings");

openSettingsBtn.addEventListener("click", () => {
  hydrateSettingsDialog();
  settingsDialog.showModal();
});

document.getElementById("saveSettings").addEventListener("click", () => {
  const nextConfig = {
    endpoint: document.getElementById("apiEndpoint").value.trim(),
    apiKey: document.getElementById("apiKey").value.trim(),
    lastUpload: document.getElementById("docUpload").files[0]?.name ?? ""
  };

  state.aiConfig = nextConfig;
  localStorage.setItem("az900.ai.config", JSON.stringify(nextConfig));
});

function loadAiConfig() {
  try {
    return JSON.parse(localStorage.getItem("az900.ai.config")) ?? { endpoint: "", apiKey: "", lastUpload: "" };
  } catch {
    return { endpoint: "", apiKey: "", lastUpload: "" };
  }
}

function hydrateSettingsDialog() {
  document.getElementById("apiEndpoint").value = state.aiConfig.endpoint;
  document.getElementById("apiKey").value = state.aiConfig.apiKey;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function startQuiz(length = 10) {
  state.mode = "quiz";
  state.quizLength = length;
  state.selectedQuestions = shuffle(QUESTION_BANK).slice(0, length);
  state.currentIndex = 0;
  state.score = 0;
  state.answers = [];
  state.startedAt = Date.now();
  render();
}

function getCurrentQuestion() {
  return state.selectedQuestions[state.currentIndex];
}

function submitAnswer(choiceIndex) {
  const q = getCurrentQuestion();
  const isCorrect = choiceIndex === q.answer;

  state.answers.push({
    questionId: q.id,
    prompt: q.prompt,
    topic: q.topic,
    selected: choiceIndex,
    correct: q.answer,
    explanation: q.explanation,
    isCorrect
  });

  if (isCorrect) state.score += 1;

  const options = [...document.querySelectorAll(".option-btn")];
  options.forEach((el, idx) => {
    el.disabled = true;
    if (idx === q.answer) el.classList.add("correct");
    if (idx === choiceIndex && !isCorrect) el.classList.add("wrong");
    if (idx === choiceIndex) el.classList.add("selected");
  });

  const feedback = document.getElementById("feedback");
  feedback.innerHTML = `<strong>${isCorrect ? "✅ Boa!" : "❌ Quase!"}</strong>${q.explanation}`;

  const nextBtn = document.getElementById("nextBtn");
  nextBtn.disabled = false;
}

function nextQuestion() {
  if (state.currentIndex < state.quizLength - 1) {
    state.currentIndex += 1;
    render();
    return;
  }

  state.mode = "result";
  render();
}

function goHome() {
  state.mode = "home";
  render();
}

function getPsychHint() {
  const ratio = state.score / state.quizLength;

  if (ratio >= 0.8) {
    return "Excelente zona de confiança. Continue com repetição espaçada para consolidar memória de longo prazo.";
  }

  if (ratio >= 0.6) {
    return "Bom ritmo. Foque nos tópicos errados para transformar reconhecimento em domínio ativo.";
  }

  return "Aprendizado em progresso: erro agora evita erro na prova. Refaça em blocos curtos e frequentes.";
}

function renderHome() {
  const lastScore = JSON.parse(localStorage.getItem("az900.last.result") || "null");

  screenArea.innerHTML = `
    <section class="home-grid">
      <article class="home-panel card">
        <span class="badge">Simulado Inteligente</span>
        <h2>Treino objetivo para AZ-900</h2>
        <p>
          Questões alinhadas aos pilares do exame: Cloud Concepts, Core Services, Security, Governance e Pricing.
        </p>
        <div class="actions">
          <button class="primary-btn" data-action="start" data-length="10">Iniciar simulado (10)</button>
          <button class="ghost-btn" data-action="start" data-length="15">Simulado completo (15)</button>
        </div>
      </article>

      <article class="home-panel card">
        <h2>UX pensada para foco</h2>
        <ul>
          <li>Progresso visual para reduzir ansiedade.</li>
          <li>Feedback imediato com explicação curta.</li>
          <li>Resumo final por tópicos para estudo ativo.</li>
          <li>Base para integração futura com IA via API key + upload.</li>
        </ul>
      </article>

      <article class="home-panel card">
        <h2>Última tentativa</h2>
        ${
          lastScore
            ? `<p>Acertos: <strong>${lastScore.score}/${lastScore.total}</strong></p>
               <p>Tempo: <strong>${lastScore.elapsed}s</strong></p>
               <p>Data: <strong>${new Date(lastScore.finishedAt).toLocaleString("pt-BR")}</strong></p>`
            : "<p>Sem tentativas registradas ainda.</p>"
        }
      </article>
    </section>
  `;

  screenArea.querySelectorAll("[data-action='start']").forEach((btn) => {
    btn.addEventListener("click", () => startQuiz(Number(btn.dataset.length)));
  });
}

function renderQuiz() {
  const q = getCurrentQuestion();
  const progress = ((state.currentIndex + 1) / state.quizLength) * 100;

  screenArea.innerHTML = `
    <section class="quiz-card card">
      <div class="meta-row">
        <span><strong>Questão ${state.currentIndex + 1}</strong> de ${state.quizLength}</span>
        <span>Tópico: ${q.topic} · Nível: ${q.level}</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
      <h2>${q.prompt}</h2>
      <div class="option-list">
        ${q.choices
          .map(
            (choice, index) =>
              `<button class="option-btn" data-choice="${index}">${String.fromCharCode(65 + index)}. ${choice}</button>`
          )
          .join("")}
      </div>
      <div id="feedback" class="feedback" aria-live="polite">
        <strong>Escolha uma alternativa.</strong>
        Marque a resposta que faz mais sentido no cenário AZ-900.
      </div>
      <div class="actions">
        <button id="nextBtn" class="primary-btn" disabled>Próxima</button>
        <button class="ghost-btn" id="exitBtn">Encerrar tentativa</button>
      </div>
    </section>
  `;

  screenArea.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", () => submitAnswer(Number(btn.dataset.choice)));
  });

  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
  document.getElementById("exitBtn").addEventListener("click", goHome);
}

function renderResult() {
  const elapsedSeconds = Math.round((Date.now() - state.startedAt) / 1000);
  const percentage = Math.round((state.score / state.quizLength) * 100);
  const byTopic = state.answers.reduce((acc, ans) => {
    if (!acc[ans.topic]) acc[ans.topic] = { total: 0, hit: 0 };
    acc[ans.topic].total += 1;
    if (ans.isCorrect) acc[ans.topic].hit += 1;
    return acc;
  }, {});

  localStorage.setItem(
    "az900.last.result",
    JSON.stringify({
      score: state.score,
      total: state.quizLength,
      elapsed: elapsedSeconds,
      finishedAt: Date.now()
    })
  );

  screenArea.innerHTML = `
    <section class="result-card card">
      <h2>Resultado do simulado</h2>
      <div class="kpi-grid">
        <div class="kpi"><p>Acertos</p><strong>${state.score}/${state.quizLength}</strong></div>
        <div class="kpi"><p>Pontuação</p><strong>${percentage}%</strong></div>
        <div class="kpi"><p>Tempo</p><strong>${elapsedSeconds}s</strong></div>
      </div>
      <p>${getPsychHint()}</p>

      <h3>Desempenho por tópico</h3>
      <div class="review-list">
        ${Object.entries(byTopic)
          .map(
            ([topic, info]) =>
              `<div class="review-item"><p><strong>${topic}</strong></p><p>${info.hit}/${info.total} corretas</p></div>`
          )
          .join("")}
      </div>

      <h3>Revisão das respostas</h3>
      <div class="review-list">
        ${state.answers
          .map(
            (ans, idx) => `
            <article class="review-item">
              <p><strong>${idx + 1}. ${ans.prompt}</strong></p>
              <p>${ans.isCorrect ? "✅ Correta" : "❌ Incorreta"}</p>
              <p><strong>Explicação:</strong> ${ans.explanation}</p>
            </article>
          `
          )
          .join("")}
      </div>

      <div class="actions">
        <button class="primary-btn" id="retryBtn">Refazer simulado</button>
        <button class="ghost-btn" id="homeBtn">Voltar ao início</button>
      </div>
    </section>
  `;

  document.getElementById("retryBtn").addEventListener("click", () => startQuiz(state.quizLength));
  document.getElementById("homeBtn").addEventListener("click", goHome);
}

function render() {
  if (state.mode === "home") return renderHome();
  if (state.mode === "quiz") return renderQuiz();
  return renderResult();
}

render();
