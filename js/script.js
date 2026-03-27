// Chatbot Logic - Makes everything work!

// Track conversation state
let conversationState = 'initial';
let userContext = {};

// Handle button option clicks
function handleOption(option) {
    // Show user's choice as a message
    addUserMessage(getOptionText(option));
    
    // Wait a bit, then show response
    setTimeout(() => {
        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            respondToOption(option);
        }, 1000);
    }, 500);
}

// Get button text for display
function getOptionText(option) {
    const texts = {
        'learn': '📚 Learn Investing Basics',
        'advice': '💡 Get Investment Advice',
        'question': '❓ Ask a Question',
        'mmf': 'What are Money Market Funds?',
        'stocks': 'How do stocks work?',
        'risk': 'Understanding risk and returns',
        'start_small': 'How to start with small amounts'
    };
    return texts[option] || option;
}

// Respond to option selected
function respondToOption(option) {
    switch(option) {
        case 'learn':
            showLearningOptions();
            break;
        case 'advice':
            startAdviceFlow();
            break;
        case 'question':
            enableFreeQuestions();
            break;
        case 'mmf':
            showMMFInfo();
            break;
        case 'stocks':
            showStocksInfo();
            break;
        case 'start_small':
            showInfo(investmentData.starting.small);
            break;
        default:
            addBotMessage("I didn't understand that. Let me show you the main options again.");
            showMainOptions();
    }
}

// Show learning path options
function showLearningOptions() {
    addBotMessage("Great choice! What would you like to learn about first?");
    
    const buttons = `
        <div class="button-group">
            <button class="option-btn" onclick="handleOption('mmf')">💰 What are Money Market Funds?</button>
            <button class="option-btn" onclick="handleOption('stocks')">📈 How do stocks work?</button>
            <button class="option-btn" onclick="handleOption('start_small')">🎯 How to start with small amounts</button>
            <button class="option-btn" onclick="showMainOptions()">← Back to main menu</button>
        </div>
    `;
    
    addBotHTML(buttons);
}

// Show MMF information with follow-ups
function showMMFInfo() {
    showInfo(investmentData.mmf.what);
    
    setTimeout(() => {
        addBotMessage("Want to know more about MMFs?");
        const buttons = `
            <div class="button-group">
                <button class="option-btn" onclick="showMMFHowTo()">How to invest in MMFs</button>
                <button class="option-btn" onclick="showMMFCompare()">MMFs vs Savings Accounts</button>
                <button class="option-btn" onclick="showLearningOptions()">← Back to learning menu</button>
            </div>
        `;
        addBotHTML(buttons);
    }, 1000);
}

function showMMFHowTo() {
    addUserMessage("How to invest in MMFs");
    setTimeout(() => {
        showInfo(investmentData.mmf.how);
        showLearningOptions();
    }, 800);
}

function showMMFCompare() {
    addUserMessage("MMFs vs Savings Accounts");
    setTimeout(() => {
        showInfo(investmentData.mmf.compare);
        showLearningOptions();
    }, 800);
}

// Show stocks information
function showStocksInfo() {
    showInfo(investmentData.stocks.what);
    
    setTimeout(() => {
        addBotMessage("Want to learn how to get started?");
        const buttons = `
            <div class="button-group">
                <button class="option-btn" onclick="showStocksHowTo()">How to start investing in stocks</button>
                <button class="option-btn" onclick="showLearningOptions()">← Back to learning menu</button>
            </div>
        `;
        addBotHTML(buttons);
    }, 1000);
}

function showStocksHowTo() {
    addUserMessage("How to start investing in stocks");
    setTimeout(() => {
        showInfo(investmentData.stocks.start);
        showLearningOptions();
    }, 800);
}

// Start personalized advice flow
function startAdviceFlow() {
    conversationState = 'advice_age';
    addBotMessage("I'll help you find the right investment! Let me ask a few quick questions:");
    
    setTimeout(() => {
        addBotMessage("How old are you?");
        const buttons = `
            <div class="button-group">
                <button class="option-btn" onclick="setAge('18-25')">18-25 years</button>
                <button class="option-btn" onclick="setAge('26-30')">26-30 years</button>
                <button class="option-btn" onclick="setAge('31+')">31+ years</button>
            </div>
        `;
        addBotHTML(buttons);
    }, 500);
}

function setAge(age) {
    userContext.age = age;
    addUserMessage(age + " years");
    
    setTimeout(() => {
        addBotMessage("What's your main financial goal?");
        const buttons = `
            <div class="button-group">
                <button class="option-btn" onclick="setGoal('emergency')">💰 Build emergency fund</button>
                <button class="option-btn" onclick="setGoal('purchase')">🚗 Save for big purchase</button>
                <button class="option-btn" onclick="setGoal('wealth')">📈 Grow wealth long-term</button>
                <button class="option-btn" onclick="setGoal('income')">💵 Generate extra income</button>
            </div>
        `;
        addBotHTML(buttons);
    }, 800);
}

function setGoal(goal) {
    userContext.goal = goal;
    const goalTexts = {
        'emergency': '💰 Build emergency fund',
        'purchase': '🚗 Save for big purchase',
        'wealth': '📈 Grow wealth long-term',
        'income': '💵 Generate extra income'
    };
    addUserMessage(goalTexts[goal]);
    
    setTimeout(() => {
        addBotMessage("When do you need this money?");
        const buttons = `
            <div class="button-group">
                <button class="option-btn" onclick="setTimeline('short')">⏰ Less than 1 year</button>
                <button class="option-btn" onclick="setTimeline('medium')">📅 1-3 years</button>
                <button class="option-btn" onclick="setTimeline('long')">🎯 3-5 years</button>
                <button class="option-btn" onclick="setTimeline('verylong')">🌟 5+ years</button>
            </div>
        `;
        addBotHTML(buttons);
    }, 800);
}

function setTimeline(timeline) {
    userContext.timeline = timeline;
    const timelineTexts = {
        'short': '⏰ Less than 1 year',
        'medium': '📅 1-3 years',
        'long': '🎯 3-5 years',
        'verylong': '🌟 5+ years'
    };
    addUserMessage(timelineTexts[timeline]);
    
    setTimeout(() => {
        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            givePersonalizedAdvice();
        }, 1500);
    }, 500);
}

// Give personalized investment advice
function givePersonalizedAdvice() {
    const {age, goal, timeline} = userContext;
    
    let advice = `Based on your profile:\n👤 Age: ${age}\n🎯 Goal: ${goal}\n⏰ Timeline: ${timeline}\n\n`;
    
    advice += "MY RECOMMENDATION:\n\n";
    
    // Logic for recommendations
    if (timeline === 'short') {
        advice += "💰 MONEY MARKET FUNDS (100%)\n";
        advice += "Why: Your timeline is short, so safety is priority!\n\n";
        advice += "Recommended MMFs:\n";
        advice += "• Cytonn MMF - 11-12% returns\n";
        advice += "• NCBA MMF - 10-11% returns\n\n";
        advice += "Start with KES 1,000 and add monthly!";
    } else if (timeline === 'medium') {
        advice += "SPLIT YOUR INVESTMENT:\n";
        advice += "💰 70% Money Market Funds (safe base)\n";
        advice += "📈 30% Blue-chip Stocks (growth potential)\n\n";
        advice += "MMFs: Cytonn or Sanlam\n";
        advice += "Stocks: Safaricom, Equity Bank, KCB\n\n";
        advice += "This balances safety with growth!";
    } else {
        advice += "GROWTH-FOCUSED PORTFOLIO:\n";
        advice += "💰 40% Money Market Funds (stability)\n";
        advice += "📈 60% Stocks (long-term growth)\n\n";
        advice += "Stocks to consider:\n";
        advice += "• Safaricom (SCOM) - Stable\n";
        advice += "• Equity Bank (EQTY) - Banking\n";
        advice += "• KCB Group (KCB) - Banking\n\n";
        advice += "Your long timeline lets you ride out market ups and downs!";
    }
    
    advice += "\n\n📚 NEXT STEPS:\n";
    advice += "1. Start with an MMF (easiest first step)\n";
    advice += "2. Invest consistently every month\n";
    advice += "3. Open CDS account when ready for stocks\n";
    advice += "4. Keep learning and adjusting!";
    
    addBotMessage(advice);
    
    setTimeout(() => {
        addBotMessage("Want to learn how to get started with these investments?");
        showLearningOptions();
    }, 2000);
}

// Enable free-form questions
function enableFreeQuestions() {
    conversationState = 'freeform';
    addBotMessage("Go ahead, ask me anything about investing in Kenya! I can help with MMFs, stocks, NSE, investment strategies, and more. 💬");
}

// Handle text input
function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    addUserMessage(message);
    input.value = '';
    
    // Process the question
    setTimeout(() => {
        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            answerQuestion(message);
        }, 1000);
    }, 500);
}

// Answer free-form questions (WITH AI!)
async function answerQuestion(question) {
    const lowerQ = question.toLowerCase();
    
    // Check if AI is available
    if (shouldUseAI()) {
        try {
            showTypingIndicator();
            const aiResponse = await getAIResponse(question);
            hideTypingIndicator();
            addBotMessage(aiResponse);
            showFollowUpOptions();
            return;
        } catch (error) {
            hideTypingIndicator();
            console.error('AI failed, using fallback:', error);
            // Continue to fallback below
        }
    }
    
    // Fallback to rule-based responses
    for (let key in quickAnswers) {
        if (lowerQ.includes(key)) {
            addBotMessage(quickAnswers[key]);
            showFollowUpOptions();
            return;
        }
    }
    
    // Keyword matching
    if (lowerQ.includes('mmf') || lowerQ.includes('money market')) {
        showMMFInfo();
    } else if (lowerQ.includes('stock') || lowerQ.includes('share') || lowerQ.includes('nse')) {
        showStocksInfo();
    } else if (lowerQ.includes('start') || lowerQ.includes('begin')) {
        showInfo(investmentData.starting.small);
        showFollowUpOptions();
    } else if (lowerQ.includes('risk') || lowerQ.includes('safe')) {
        showInfo(investmentData.risk.understand);
        showFollowUpOptions();
    } else if (lowerQ.includes('timeline') || lowerQ.includes('when')) {
        showInfo(investmentData.starting.timeline);
        showFollowUpOptions();
    } else {
        addBotMessage("That's a great question! I can help you with:\n\n• Money Market Funds basics\n• How stocks work\n• Getting started with small amounts\n• Understanding investment risk\n\nWhat would you like to explore?");
        showLearningOptions();
    }
}
    
    // Keyword matching for detailed responses
    if (lowerQ.includes('mmf') || lowerQ.includes('money market')) {
        showMMFInfo();
    } else if (lowerQ.includes('stock') || lowerQ.includes('share') || lowerQ.includes('nse')) {
        showStocksInfo();
    } else if (lowerQ.includes('start') || lowerQ.includes('begin')) {
        showInfo(investmentData.starting.small);
        showFollowUpOptions();
    } else if (lowerQ.includes('risk') || lowerQ.includes('safe')) {
        showInfo(investmentData.risk.understand);
        showFollowUpOptions();
    } else if (lowerQ.includes('timeline') || lowerQ.includes('when')) {
        showInfo(investmentData.starting.timeline);
        showFollowUpOptions();
    } else {
        // Default response
        addBotMessage("That's a great question! While I may not have a specific answer for that right now, I can help you with:\n\n• Money Market Funds basics\n• How stocks work\n• Getting started with small amounts\n• Understanding investment risk\n\nWhat would you like to explore?");
        showLearningOptions();
    }

// UI Helper Functions
function addUserMessage(text) {
    const messagesDiv = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `<div class="message-content"><p>${text}</p></div>`;
    messagesDiv.appendChild(messageDiv);
    scrollToBottom();
}

function addBotMessage(text) {
    const messagesDiv = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    
    // Convert line breaks to paragraphs
    const paragraphs = text.split('\n').map(p => p.trim()).filter(p => p.length > 0);
    const htmlContent = paragraphs.map(p => `<p>${p}</p>`).join('');
    
    messageDiv.innerHTML = `<div class="message-content">${htmlContent}</div>`;
    messagesDiv.appendChild(messageDiv);
    scrollToBottom();
}

function addBotHTML(html) {
    const messagesDiv = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    messageDiv.innerHTML = html;
    messagesDiv.appendChild(messageDiv);
    scrollToBottom();
}

function showInfo(infoObj) {
    const title = infoObj.title;
    const content = infoObj.content;
    addBotMessage(`**${title}**\n\n${content}`);
}

function showTypingIndicator() {
    const messagesDiv = document.getElementById('chatMessages');
    const indicator = document.createElement('div');
    indicator.className = 'message bot-message typing-indicator';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = `
        <div class="message-content">
            <div class="typing-indicator">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    messagesDiv.appendChild(indicator);
    scrollToBottom();
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

function scrollToBottom() {
    const messagesDiv = document.getElementById('chatMessages');
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function showMainOptions() {
    addBotMessage("What would you like to do?");
    const buttons = `
        <div class="button-group">
            <button class="option-btn" onclick="handleOption('learn')">📚 Learn Investing Basics</button>
            <button class="option-btn" onclick="handleOption('advice')">💡 Get Investment Advice</button>
            <button class="option-btn" onclick="handleOption('question')">❓ Ask a Question</button>
        </div>
    `;
    addBotHTML(buttons);
}

function showFollowUpOptions() {
    setTimeout(() => {
        addBotMessage("Want to explore something else?");
        showMainOptions();
    }, 1500);
}

// Handle Enter key in input
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}