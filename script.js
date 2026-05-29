/**
 * PROJETO: Agro Forte, Futuro Sustentável
 * ARQUIVO: script.js
 * DESCRIÇÃO: Controla as interações do DOM, validação de formulário, 
 *            mensagens dinâmicas e o alternador de modo escuro.
 */

// Aguarda o carregamento completo do DOM para iniciar os scripts
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // SELEÇÃO DE ELEMENTOS DO DOM
    // ==========================================
    const themeToggleBtn = document.getElementById("themeToggle");
    const ctaBtn = document.getElementById("ctaBtn");
    const dynamicMessage = document.getElementById("dynamicMessage");
    const newsletterForm = document.getElementById("newsletterForm");
    const formFeedback = document.getElementById("formFeedback");

    // Banco de frases dinâmicas para o botão "Saiba Mais"
    const insightsAgro = [
        "💡 Sabia que a agricultura de precisão pode reduzir em até 30% o uso de defensivos?",
        "🌱 O plantio direto evita a erosão e mantém o carbono guardado com segurança no solo.",
        "💧 Sensores inteligentes de irrigação economizam milhares de litros de água por safra.",
        "🚜 Tratores movidos a biomassa reduzem drasticamente a pegada de carbono do campo."
    ];

    // ==========================================
    // FUNCIONALIDADE: MODO ESCURO (DARK MODE)
    // ==========================================
    themeToggleBtn.addEventListener("click", () => {
        // Verifica o tema atual usando atributo customizado no HTML
        const currentTheme = document.documentElement.getAttribute("data-theme");
        
        if (currentTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
            themeToggleBtn.textContent = "🌓 Modo";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            themeToggleBtn.textContent = "☀️ Claro";
        }
    });

    // ==========================================
    // FUNCIONALIDADE: MENSAGENS DINÂMICAS (CTA)
    // ==========================================
    ctaBtn.addEventListener("click", () => {
        // Sorteia um fato sustentável aleatório do array
        const randomIndex = Math.floor(Math.random() * insightsAgro.length);
        const selectedFact = insightsAgro[randomIndex];

        // Atualiza o texto do elemento e remove a classe que o esconde
        dynamicMessage.textContent = selectedFact;
        dynamicMessage.classList.remove("hidden");

        // Rolagem suave automática até a mensagem gerada
        dynamicMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    // ==========================================
    // FUNCIONALIDADE: VALIDAÇÃO DO FORMULÁRIO
    // ==========================================
    newsletterForm.addEventListener("submit", (event) => {
        // Impede o recarregamento padrão da página ao enviar o formulário
        event.preventDefault();

        // Captura os inputs dentro do evento de envio
        const nameInput = document.getElementById("userName").value.trim();
        const emailInput = document.getElementById("userEmail").value.trim();

        // Limpa mensagens de feedback anteriores
        formFeedback.textContent = "";
        formFeedback.className = "form-feedback";

        // Validação Simples: Campos vazios
        if (nameInput === "" || emailInput === "") {
            formFeedback.textContent = "⚠️ Por favor, preencha todos os campos.";
            formFeedback.classList.add("text-error");
            return;
        }

        // Validação Simples: Verificação básica de formato de e-mail
        if (!emailInput.includes("@") || !emailInput.includes(".")) {
            formFeedback.textContent = "❌ Insira um endereço de e-mail válido.";
            formFeedback.classList.add("text-error");
            return;
        }

        // Caso passe nas validações - Sucesso
        formFeedback.textContent = `🎉 Obrigado, ${nameInput}! Sua inscrição foi realizada com sucesso.`;
        formFeedback.classList.add("text-success");

        // Limpa os campos do formulário após o envio bem-sucedido
        newsletterForm.reset();
    });
});

