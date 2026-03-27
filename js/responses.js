// Investment Knowledge Database
// All the investment information the chatbot knows

const investmentData = {
    
    // Money Market Funds Information
    mmf: {
        what: {
            title: "What are Money Market Funds?",
            content: `Money Market Funds (MMFs) are low-risk investment pools that invest in short-term securities. Think of them as a smarter savings account!

Key Benefits:
✅ Higher returns than regular savings (8-12% annually)
✅ Very low risk - your money is safe
✅ Easy access to your money anytime
✅ Start with as little as KES 100
✅ No lock-in period

Popular Kenyan MMFs:
- Cytonn Money Market Fund (11-12% returns)
- Sanlam Money Market Fund (10-11% returns)
- NCBA Money Market Fund (10-11% returns)
- CIC Money Market Fund (9-10% returns)`
        },
        
        how: {
            title: "How to Invest in MMFs",
            content: `Getting started with MMFs is super easy! Here's how:

STEP 1: Choose a Fund
Research and pick an MMF provider (Cytonn, Sanlam, NCBA, etc.)

STEP 2: Download Their App
Most MMFs have mobile apps:
- Cytonn App
- Sanlam Investor
- NCBA Loop

STEP 3: Register
- Provide ID/Passport
- Fill KYC (Know Your Customer) form
- Link your M-Pesa

STEP 4: Deposit Money
- Minimum: KES 100-1,000 (varies by fund)
- Use M-Pesa or bank transfer
- Money reflects in 1-2 days

STEP 5: Watch It Grow!
- Interest calculated daily
- Paid monthly
- Withdraw anytime (takes 2-3 days)

PRO TIP: Start small (KES 1,000), add monthly, and build the habit!`
        },
        
        compare: {
            title: "MMFs vs Savings Accounts",
            content: `Here's the honest comparison:

💰 RETURNS:
- Savings Account: 3-6% per year
- MMFs: 8-12% per year
Winner: MMFs (2x better!)

🔒 SAFETY:
- Both are very safe
- Savings = government insured up to KES 500K
- MMFs = regulated by CMA, very low risk
Winner: Tie (both safe!)

💸 ACCESS TO MONEY:
- Savings: Instant withdrawal
- MMFs: 2-3 days to withdraw
Winner: Savings (faster)

📱 CONVENIENCE:
- Both have mobile apps
- Both easy to use
Winner: Tie

🎯 BEST FOR:
- Savings: Emergency fund (need instant access)
- MMFs: Growing wealth (can wait 2-3 days)

MY ADVICE:
Keep KES 10-20K in savings for emergencies.
Put everything else in MMFs for better growth!`
        }
    },
    
    // Stock Market Information
    stocks: {
        what: {
            title: "How Stocks Work",
            content: `Stocks (or shares) are tiny pieces of ownership in a company. When you buy stock, you become a part-owner!

HOW IT WORKS:
1️⃣ Company sells shares to raise money
2️⃣ You buy shares on the Nairobi Securities Exchange (NSE)
3️⃣ If company does well, share price goes up
4️⃣ You can sell for profit OR hold for dividends

WAYS YOU MAKE MONEY:
💰 Capital Gains: Buy at KES 50, sell at KES 70 = KES 20 profit
💵 Dividends: Companies share profits with shareholders

POPULAR NSE STOCKS:
- Safaricom (SCOM) - Most traded, stable
- Equity Bank (EQTY) - Banking sector
- KCB Group (KCB) - Banking sector
- EABL (EABL) - Consumer goods
- BAT Kenya (BAT) - Stable dividends

RISK LEVEL: Medium to High
(Stocks can go up OR down!)`
        },
        
        start: {
            title: "How to Start Investing in Stocks",
            content: `Here's your step-by-step guide to NSE investing:

STEP 1: Open a CDS Account
CDS = Central Depository System (holds your shares)
- Go to any stockbroker (e.g., Genghis Capital, Standard Investment Bank)
- Provide ID, KRA PIN, passport photo
- Fill forms
- Fee: ~KES 200-300

STEP 2: Fund Your Account
- Minimum: ~KES 5,000-10,000 to start
- Transfer via bank or M-Pesa

STEP 3: Research Stocks
- Check company financial reports
- Look at P/E ratio, dividends
- Read market news

STEP 4: Place Your Order
- Tell broker which stock and how many shares
- Buy at market price OR set your limit

STEP 5: Pay Fees
- Brokerage: ~1.5-2% of transaction
- NSE fees: Small percentage
- Minimum fees: ~KES 200

EXAMPLE:
Buy 100 Safaricom shares at KES 15 each
= KES 1,500 + fees (~KES 250)
Total: ~KES 1,750

PRO TIP: Start with blue-chip stocks (Safaricom, Equity, KCB) - safer for beginners!`
        }
    },
    
    // Getting Started Advice
    starting: {
        small: {
            title: "Starting with Small Amounts",
            content: `You don't need thousands to start! Here's how to begin with little money:

IF YOU HAVE KES 500-1,000:
✅ Start with MMFs
- Cytonn accepts KES 100 minimum
- NCBA accepts KES 1,000
- Add KES 500-1,000 monthly

IF YOU HAVE KES 5,000-10,000:
✅ Split it:
- 70% in MMF (KES 7,000)
- 30% save for stocks (KES 3,000)
- Once stock savings hit KES 10K, buy shares

IF YOU HAVE KES 20,000+:
✅ Diversify:
- 50% MMF (safe growth)
- 30% Blue-chip stocks (SCOM, EQTY)
- 20% Emergency savings

THE MAGIC FORMULA:
📅 Invest consistently (monthly)
⏰ Start early (time = compound growth)
📚 Keep learning
💪 Stay disciplined

REMEMBER: The best time to start was yesterday. The second best time is NOW!`
        },
        
        timeline: {
            title: "Investment Timeline Guide",
            content: `Your timeline determines your investment strategy:

🎯 LESS THAN 1 YEAR:
Best: Money Market Funds ONLY
Why: Stocks too risky for short term
Example: Saving for phone, laptop

🎯 1-2 YEARS:
Best: 80% MMF + 20% Blue-chip stocks
Why: Mostly safe, little growth potential
Example: Saving for car downpayment

🎯 3-5 YEARS:
Best: 50% MMF + 50% Stocks
Why: Balanced safety and growth
Example: Business capital, house deposit

🎯 5+ YEARS:
Best: 30% MMF + 70% Stocks
Why: Time to recover from market dips
Example: Long-term wealth building

🎯 10+ YEARS (Retirement):
Best: 20% MMF + 80% Stocks
Why: Maximum growth potential
Example: Retirement planning

KEY RULE:
The longer your timeline, the more stocks you can hold!
Short timeline? Stick to MMFs!`
        }
    },
    
    // Risk and Safety
    risk: {
        understand: {
            title: "Understanding Investment Risk",
            content: `Risk = Possibility of losing money. Here's what you need to know:

LOW RISK (MMFs):
📊 Risk Level: 2/10
💰 Potential Loss: Almost zero
📈 Returns: 8-12% yearly
⏰ Good for: Short-term goals, safety

MEDIUM RISK (Blue-chip Stocks):
📊 Risk Level: 5/10
💰 Potential Loss: 10-30% in bad years
📈 Returns: 10-20% yearly average
⏰ Good for: Long-term growth

HIGH RISK (Small Stocks):
📊 Risk Level: 8/10
💰 Potential Loss: 50%+ possible
📈 Returns: Could double OR crash
⏰ Good for: Experienced investors only

REDUCING RISK:
✅ Diversify (don't put all eggs in one basket)
✅ Invest long-term (ride out volatility)
✅ Research before buying
✅ Only invest money you can afford to lose
✅ Start with low-risk options

GOLDEN RULE:
Higher potential returns = Higher risk
Never invest money you need soon!`
        }
    }
};

// Quick Answer Database (for common questions)
const quickAnswers = {
    "how much to start": "You can start investing with as little as KES 100 in Money Market Funds! For stocks, you'll need about KES 5,000-10,000 to get started. The important thing is to start, even if small!",
    
    "best investment": "For beginners, I recommend starting with Money Market Funds - they're safe, easy, and give 8-12% returns. Once you have KES 10,000+ saved, you can add some blue-chip stocks like Safaricom or Equity Bank.",
    
    "is it safe": "Money Market Funds are very safe - almost as safe as a savings account but with better returns (8-12%). Stocks are riskier but can give higher returns if you invest long-term. Always start with what you're comfortable with!",
    
    "mmf or stocks": "It depends on your timeline! Need money within 1-2 years? Go with MMFs. Investing for 3+ years? Mix both. Long-term (5+ years)? More stocks. Start with MMFs to build confidence!",
    
    "which mmf": "Top MMFs in Kenya: Cytonn (11-12% returns), Sanlam (10-11%), NCBA (10-11%). Cytonn has the lowest minimum (KES 100). All are safe and regulated. Pick one and start!",
    
    "which stock": "For beginners, stick to blue-chip stocks: Safaricom (SCOM) - most stable, Equity Bank (EQTY), KCB Group (KCB). These are large, established companies that are safer than small stocks."
};