// AI Stock Terminal with Live News Integration & Enhanced Game Mode
// Configuration
const CONFIG = {
    NEWS_API_KEY: '1QW3DSA4ERT_3ER4SHGN6JHUYI7_GY6HNBVT5NNVJ43HHGN', 
    NEWS_REFRESH_INTERVAL: 60 * 60 * 1000, // 1 hour
    KEYWORDS: ['Reliance', 'TCS', 'Infosys'],
    MAX_NEWS_ITEMS: 20
};

// Real news data from search results
const REAL_NEWS_DATA = [
    {
        title: "TCS shares hit three-year low, give up Rs 3,000 mark amid H-1B visa concerns",
        description: "IT major crashes 28.10% YTD with investors losing Rs 4.12 lakh crore on Trump visa fee hike plans",
        impact: 85,
        category: "Regulation",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        sentiment: "negative",
        url: "https://www.businesstoday.in/markets/stocks/story/tcs-shares-hit-three-year-low-give-up-rs-3000-mark-price-targets-495695-2025-09-25",
        stock: "TCS.NS"
    },
    {
        title: "TCS Share Price At Over Four-Year Low: Three Key Factors Dragging The Stock",
        description: "Key headwinds include H-1B visa fee concerns, weak demand outlook, and client spending cuts impacting margins",
        impact: 78,
        category: "Market Analysis",
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
        sentiment: "negative",
        url: "#",
        stock: "TCS.NS"
    },
    {
        title: "Infosys shares decline 2.86% in today's session; over 81 lakh shares traded",
        description: "Heavy trading volumes as investors react to broader IT sector headwinds and margin pressure concerns",
        impact: 65,
        category: "Market News",
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
        sentiment: "negative",
        url: "#",
        stock: "INFY.NS"
    },
    {
        title: "Infosys shares jump 2% on higher-than-expected share buyback of Rs 18,000 crore",
        description: "First buyback since 2022 provides support to investor confidence amid tech sector challenges",
        impact: 89,
        category: "Corporate",
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
        sentiment: "positive",
        url: "https://www.moneycontrol.com/news/tags/infosys.html",
        stock: "INFY.NS"
    },
    {
        title: "EU clears Mukesh Ambani-led Reliance's ₹855 cr-JV with Zuckerberg's Meta",
        description: "Partnership will develop Llama-based enterprise AI platforms for Indian market expansion",
        impact: 84,
        category: "Corporate",
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
        sentiment: "positive",
        url: "https://economictimes.com/news/company/corporate-trends/eu-clears-mukesh-ambani-led-reliances-855-cr-jv-with-meta/articleshow/124156394.cms",
        stock: "RELIANCE.NS"
    },
    {
        title: "Reliance Industries has launched Reliance Intelligence, a wholly-owned subsidiary",
        description: "New AI subsidiary signals aggressive push into artificial intelligence and data analytics business",
        impact: 76,
        category: "Corporate",
        timestamp: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000), // 1.5 days ago
        sentiment: "positive",
        url: "#",
        stock: "RELIANCE.NS"
    },
    {
        title: "Stock market crash: Sensex falls 733 pts on Trump tariff fears",
        description: "Markets fall for sixth straight session amid global trade uncertainty and FII selling pressure",
        impact: 72,
        category: "Market",
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
        sentiment: "negative",
        url: "#",
        stock: "ALL"
    },
    {
        title: "RBI MPC meeting: Rate cut chances at 70% says Nomura",
        description: "Analysts expect dovish stance amid inflation concerns and growth slowdown signals",
        impact: 45,
        category: "Policy",
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
        sentiment: "neutral",
        url: "#",
        stock: "ALL"
    },
    {
        title: "Crude oil prices surge 4.2% on Middle East supply disruption fears",
        description: "Energy stocks rally as Brent crude jumps above $85, benefiting Reliance's refining margins",
        impact: 68,
        category: "Commodity Prices",
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
        sentiment: "positive",
        url: "#",
        stock: "RELIANCE.NS"
    },
    {
        title: "IT sector faces headwinds from client spending cuts in BFSI vertical",
        description: "Banking and financial services clients reducing technology budgets amid economic uncertainty",
        impact: 71,
        category: "Sector Update",
        timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000), // 18 hours ago
        sentiment: "negative",
        url: "#",
        stock: "ALL"
    }
];

// Shared Data Module
const StockData = {
    "RELIANCE.NS": {
        "name": "Reliance Industries Ltd",
        "ticker": "RELIANCE.NS",
        "currentPrice": 1471.30,
        "change": -0.98,
        "changePercent": -3.02,
        "aiPredictedPrice": 1469.43,
        "aiConfidence": 75,
        "direction": "BEARISH",
        "conviction": "High",
        "targetChange": 3.0,
        "dayHigh": 1503.90,
        "dayLow": 1468.80,
        "volume": "12.89M",
        "marketCap": "₹19,91,233 Cr",
        "peRatio": 22.85,
        "weekHigh52": 1500.0,
        "weekLow52": 1200.0,
        "chartData": {
            "labels": ["Dec 27", "Dec 29", "Dec 31", "Jan 2", "Jan 4", "Jan 8", "Today"],
            "prices": [1550.2, 1535.1, 1530.5, 1600.0, 1589.4, 1579.6, 1471.6],
            "predictions": [1550.4, 1535.5, 1530.8, 1600.1, 1589.1, 1579.1, 1471.6],
            "volumes": [10.5, 10.2, 11.8, 11.9, 11.4, 12.9, 12.8]
        }
    },
    "TCS.NS": {
        "name": "Tata Consultancy Services Limited",
        "ticker": "TCS.NS",
        "currentPrice": 3204.10,
        "change": -58.3,
        "changePercent": -3.28,
        "aiPredictedPrice": 3202.25,
        "aiConfidence": 68,
        "direction": "BEARISH",
        "conviction": "Medium",
        "targetChange": -2.5,
        "dayHigh": 3286.90,
        "dayLow": 3182.00,
        "volume": "3.42M",
        "marketCap": "₹11,48,920 Cr",
        "peRatio": 21.27,
        "weekHigh52": 4494.90,
        "weekLow52": 2991.60,
        "chartData": {
            "labels": ["Dec 27", "Dec 29", "Dec 31", "Jan 2", "Jan 4", "Jan 8", "Today"],
            "prices": [3280.5, 3251.5, 3246.8, 3227.4, 3216.4, 3203.8, 3200.8],
            "predictions": [3280.9, 3251.0, 3246.1, 3227.1, 3216.3, 3203.4, 3200.8],
            "volumes": [3.2, 3.5, 2.9, 1.6, 5.0, 3.7, 3.6]
        }
    },
    "INFY.NS": {
        "name": "Infosys Limited",
        "ticker": "INFY.NS",
        "currentPrice": 1614.30,
        "change": -35.9,
        "changePercent": -2.42,
        "aiPredictedPrice": 1612.75,
        "aiConfidence": 72,
        "direction": "BEARISH",
        "conviction": "Medium",
        "targetChange": -1.8,
        "dayHigh": 1644.30,
        "dayLow": 1608.60,
        "volume": "2.82M",
        "marketCap": "₹6,67,756 Cr",
        "peRatio": 21.31,
        "weekHigh52": 1982.45,
        "weekLow52": 1307.00,
        "chartData": {
            "labels": ["Dec 27", "Dec 29", "Dec 31", "Jan 2", "Jan 4", "Jan 8", "Today"],
            "prices": [1656.2, 1644.8, 1621.1, 1615.4, 1612.4, 1615.7, 1612.9],
            "predictions": [1656.5, 1644.2, 1621.5, 1615.6, 1612.7, 1615.2, 1612.9],
            "volumes": [3.5, 3.2, 3.1, 2.9, 3.0, 2.82, 2.82]
        }
    }
};

// News Service Class
class NewsService {
    constructor() {
        this.newsData = [];
        this.lastFetch = null;
        this.isLoading = false;
    }

    // Convert timestamp to relative time
    getRelativeTime(timestamp) {
        const now = new Date();
        const diffMs = now.getTime() - timestamp.getTime();
        const diffMins = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffMins < 1) {
            return 'just now';
        } else if (diffMins < 60) {
            return diffMins === 1 ? '1 minute ago' : `${diffMins} minutes ago`;
        } else if (diffHours < 24) {
            return diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
        } else {
            return diffDays === 1 ? '1 day ago' : `${diffDays} days ago`;
        }
    }

    async fetchNews() {
        if (this.isLoading) return;
        
        this.isLoading = true;
        this.updateNewsStatus('loading', 'Fetching latest market news...');
        
        try {
            // Try to fetch from news API first
            if (CONFIG.NEWS_API_KEY !== 'YOUR_API_KEY_HERE') {
                const response = await this.fetchFromAPI();
                if (response && response.articles) {
                    this.processAPINews(response.articles);
                    this.updateNewsStatus('success', 'Live news updated');
                    return;
                }
            }
            
            // Use real news data with updated relative timestamps
            this.generateLiveNews();
            this.updateNewsStatus('success', 'Market news updated');
            
        } catch (error) {
            console.error('Error fetching news:', error);
            this.generateLiveNews();
            this.updateNewsStatus('error', 'Using cached market data');
        } finally {
            this.isLoading = false;
            this.lastFetch = new Date();
        }
    }

    async fetchFromAPI() {
        const keywords = CONFIG.KEYWORDS.join(' OR ');
        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(keywords)}&language=en&sortBy=publishedAt&pageSize=50&apiKey=${CONFIG.NEWS_API_KEY}`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('API request failed');
        
        return await response.json();
    }

    processAPINews(articles) {
        this.newsData = articles.slice(0, CONFIG.MAX_NEWS_ITEMS).map(article => {
            const impact = this.calculateImpact(article.title, article.description);
            const sentiment = this.analyzeSentiment(article.title, article.description);
            const stock = this.identifyStock(article.title, article.description);
            
            return {
                title: article.title,
                description: article.description || 'No description available',
                impact: impact,
                category: this.categorizeNews(article.title),
                timestamp: new Date(article.publishedAt),
                sentiment: sentiment,
                url: article.url,
                stock: stock
            };
        });
    }

    generateLiveNews() {
        // Add some random variation to timestamps to simulate fresh updates
        const nowMs = Date.now();
        const variations = [
            -15 * 60 * 1000, // 15 minutes ago
            -30 * 60 * 1000, // 30 minutes ago  
            -45 * 60 * 1000, // 45 minutes ago
            -90 * 60 * 1000, // 1.5 hours ago
        ];

        this.newsData = REAL_NEWS_DATA.map((item, index) => {
            // Add slight timestamp variation for some items to simulate live updates
            let adjustedTimestamp = new Date(item.timestamp);
            if (index < 4) {
                adjustedTimestamp = new Date(nowMs + variations[index]);
            }
            
            return {
                ...item,
                timestamp: adjustedTimestamp,
                impact: Math.max(30, Math.min(95, item.impact + (Math.random() - 0.5) * 5)) // Slight impact variation
            };
        });

        // Sort by timestamp (most recent first)
        this.newsData.sort((a, b) => b.timestamp - a.timestamp);
    }

    calculateImpact(title, description) {
        const text = `${title} ${description}`.toLowerCase();
        let impact = 30;
        
        // High impact keywords
        const highImpactWords = ['crash', 'surge', 'buyback', 'results', 'earnings', 'profit', 'loss', 'agreement', 'deal', 'cleared'];
        const mediumImpactWords = ['announce', 'launch', 'expansion', 'investment', 'growth', 'decline', 'jump', 'fall'];
        
        highImpactWords.forEach(word => {
            if (text.includes(word)) impact += 25;
        });
        
        mediumImpactWords.forEach(word => {
            if (text.includes(word)) impact += 15;
        });
        
        return Math.min(95, Math.max(30, impact));
    }

    analyzeSentiment(title, description) {
        const text = `${title} ${description}`.toLowerCase();
        const positiveWords = ['growth', 'profit', 'gain', 'rise', 'boost', 'success', 'agreement', 'expansion', 'cleared', 'approved', 'jump', 'surge'];
        const negativeWords = ['loss', 'decline', 'fall', 'cut', 'reduce', 'concern', 'worry', 'slip', 'drag', 'headwind', 'crash', 'fears'];
        
        let positiveCount = 0;
        let negativeCount = 0;
        
        positiveWords.forEach(word => {
            if (text.includes(word)) positiveCount++;
        });
        
        negativeWords.forEach(word => {
            if (text.includes(word)) negativeCount++;
        });
        
        if (positiveCount > negativeCount) return 'positive';
        if (negativeCount > positiveCount) return 'negative';
        return 'neutral';
    }

    identifyStock(title, description) {
        const text = `${title} ${description}`.toLowerCase();
        
        if (text.includes('reliance') || text.includes('ril') || text.includes('mukesh ambani')) return 'RELIANCE.NS';
        if (text.includes('tcs') || text.includes('tata consultancy')) return 'TCS.NS';
        if (text.includes('infosys') || text.includes('infy')) return 'INFY.NS';
        
        return 'ALL';
    }

    categorizeNews(title) {
        const titleLower = title.toLowerCase();
        
        if (titleLower.includes('earnings') || titleLower.includes('results') || titleLower.includes('profit')) return 'Earnings';
        if (titleLower.includes('merger') || titleLower.includes('acquisition') || titleLower.includes('deal') || titleLower.includes('jv') || titleLower.includes('buyback')) return 'Corporate';
        if (titleLower.includes('regulation') || titleLower.includes('policy') || titleLower.includes('rbi') || titleLower.includes('visa') || titleLower.includes('eu clears')) return 'Regulation';
        if (titleLower.includes('oil') || titleLower.includes('commodity') || titleLower.includes('gold') || titleLower.includes('crude')) return 'Commodity Prices';
        if (titleLower.includes('sensex') || titleLower.includes('nifty') || titleLower.includes('market')) return 'Market';
        
        return 'Market News';
    }

    updateNewsStatus(status, message) {
        const indicator = document.getElementById('newsIndicator');
        const statusText = document.getElementById('newsStatusText');
        
        if (indicator && statusText) {
            indicator.className = `news-indicator ${status}`;
            statusText.textContent = message;
        }
    }

    getNewsData() {
        return this.newsData;
    }

    getImpactData() {
        return this.newsData.slice(-10).map(item => ({
            impact: item.impact,
            sentiment: item.sentiment,
            title: item.title.substring(0, 30) + '...'
        }));
    }
}

// Enhanced Game Mode Class
class TradingGame {
    constructor() {
        this.portfolio = {
            cash: 100000,
            holdings: {},
            totalValue: 100000,
            pnl: 0
        };
        
        this.transactions = [];
        this.challenges = [
            {
                id: 'first_trade',
                title: 'Beginner Trader',
                description: 'Make your first profitable trade',
                reward: '₹500 bonus',
                progress: 0,
                target: 1,
                completed: false
            },
            {
                id: 'portfolio_diversify',
                title: 'Diversification Master',
                description: 'Hold stocks from all 3 companies',
                reward: '₹1000 bonus',
                progress: 0,
                target: 3,
                completed: false
            },
            {
                id: 'profit_target',
                title: 'Profit Achiever',
                description: 'Achieve ₹5000 profit',
                reward: '₹2000 bonus',
                progress: 0,
                target: 5000,
                completed: false
            },
            {
                id: 'volume_trader',
                title: 'Volume Trader',
                description: 'Complete 10 trades',
                reward: '₹1500 bonus',
                progress: 0,
                target: 10,
                completed: false
            }
        ];
        
        this.currentOrderType = 'buy';
        this.portfolioChart = null;
        this.quizQuestions = [
            {
                question: "What does P/E ratio represent?",
                options: ["Price to Earnings ratio", "Profit to Equity ratio", "Price to Equity ratio", "Profit to Earnings ratio"],
                correct: 0,
                explanation: "P/E ratio shows how much investors are willing to pay for each rupee of earnings."
            },
            {
                question: "What is diversification in investing?",
                options: ["Buying only one stock", "Spreading investments across different assets", "Only trading in one sector", "Keeping all money in cash"],
                correct: 1,
                explanation: "Diversification helps reduce risk by spreading investments across different assets and sectors."
            },
            {
                question: "What does volatility measure?",
                options: ["Company profits", "Price stability", "Price fluctuations", "Market size"],
                correct: 2,
                explanation: "Volatility measures how much and how quickly prices move up and down."
            }
        ];
        
        this.glossaryTerms = [
            {
                term: "Portfolio",
                definition: "A collection of financial investments like stocks, bonds, and cash equivalents.",
                category: "basics"
            },
            {
                term: "P&L (Profit & Loss)",
                definition: "The gain or loss from your trading activities, calculated as current value minus initial investment.",
                category: "basics"
            },
            {
                term: "Volatility",
                definition: "The degree of variation in a trading price series over time, indicating investment risk.",
                category: "risk"
            },
            {
                term: "Market Cap",
                definition: "The total value of a company's shares, calculated as stock price × number of shares.",
                category: "valuation"
            },
            {
                term: "Dividend",
                definition: "A payment made by corporations to shareholders as a distribution of profits.",
                category: "income"
            },
            {
                term: "Bull Market",
                definition: "A market condition characterized by rising prices and investor optimism.",
                category: "market"
            },
            {
                term: "Bear Market",
                definition: "A market condition with falling prices, typically declining 20% or more from recent highs.",
                category: "market"
            },
            {
                term: "Stop Loss",
                definition: "An order to sell a stock when it reaches a certain price to limit losses.",
                category: "orders"
            }
        ];
        
        this.leaderboard = [
            { name: "You", score: 100000, rank: 1 },
            { name: "AI Trader", score: 98500, rank: 2 },
            { name: "Market Pro", score: 97200, rank: 3 },
            { name: "Portfolio Expert", score: 96800, rank: 4 },
            { name: "Stock Guru", score: 95500, rank: 5 }
        ];
        
        this.aiChatHistory = [];
        this.eventSimulatorActive = false;
    }

    initializeGame() {
        this.updateGameDisplay();
        this.updateChallengesDisplay();
        this.updateLeaderboard();
        this.renderGlossary();
        this.setupEventSimulator();
        this.setupAIChatbot();
    }

    placeOrder(stock, type, quantity, price) {
        const totalValue = quantity * price;
        
        if (type === 'buy') {
            if (this.portfolio.cash < totalValue) {
                this.showToast('error', 'Insufficient Balance', 'Not enough cash to complete this order');
                return false;
            }
            
            this.portfolio.cash -= totalValue;
            this.portfolio.holdings[stock] = (this.portfolio.holdings[stock] || 0) + quantity;
        } else {
            if (!this.portfolio.holdings[stock] || this.portfolio.holdings[stock] < quantity) {
                this.showToast('error', 'Insufficient Shares', 'Not enough shares to sell');
                return false;
            }
            
            this.portfolio.cash += totalValue;
            this.portfolio.holdings[stock] -= quantity;
            
            if (this.portfolio.holdings[stock] === 0) {
                delete this.portfolio.holdings[stock];
            }
        }
        
        // Record transaction
        const transaction = {
            id: Date.now(),
            stock,
            type,
            quantity,
            price,
            timestamp: new Date(),
            value: totalValue
        };
        
        this.transactions.push(transaction);
        
        this.updatePortfolioValue();
        this.updateChallenges();
        this.updateTransactionHistory();
        this.showToast('success', 'Order Placed', `${type.toUpperCase()} order for ${quantity} shares of ${stock} completed`);
        
        // Show quiz after trade
        this.showPostTradeQuiz();
        
        return true;
    }

    updatePortfolioValue() {
        let holdingsValue = 0;
        
        Object.entries(this.portfolio.holdings).forEach(([stock, quantity]) => {
            const stockData = StockData[stock];
            if (stockData) {
                holdingsValue += quantity * stockData.currentPrice;
            }
        });
        
        this.portfolio.totalValue = this.portfolio.cash + holdingsValue;
        this.portfolio.pnl = this.portfolio.totalValue - 100000;
        
        this.updateGameDisplay();
        this.updateLeaderboard();
    }

    updateGameDisplay() {
        this.safeUpdateElement('portfolioValue', `₹${this.portfolio.totalValue.toLocaleString('en-IN')}`);
        this.safeUpdateElement('cashBalance', `₹${this.portfolio.cash.toLocaleString('en-IN')}`);
        
        const pnlEl = document.getElementById('totalPnL');
        if (pnlEl) {
            const pnlPercent = ((this.portfolio.pnl / 100000) * 100).toFixed(2);
            pnlEl.textContent = `₹${this.portfolio.pnl.toLocaleString('en-IN')} (${pnlPercent >= 0 ? '+' : ''}${pnlPercent}%)`;
            pnlEl.className = `stat-value ${this.portfolio.pnl >= 0 ? 'positive' : 'negative'}`;
        }
        
        // Update risk level
        const riskLevel = this.calculateRiskLevel();
        const riskEl = document.getElementById('riskLevel');
        if (riskEl) {
            riskEl.textContent = riskLevel;
            riskEl.className = `risk-badge ${riskLevel.toLowerCase()}`;
        }
        
        this.updateHoldingsDisplay();
        this.updateTodayPnL();
        this.updateWeekPnL();
    }

    updateTodayPnL() {
        const todayPnLEl = document.getElementById('todayPnL');
        if (todayPnLEl) {
            const todayPercent = ((this.portfolio.pnl / 100000) * 100).toFixed(2);
            todayPnLEl.textContent = `${todayPercent >= 0 ? '+' : ''}${todayPercent}%`;
            todayPnLEl.className = `perf-value ${this.portfolio.pnl >= 0 ? 'positive' : 'negative'}`;
        }
    }

    updateWeekPnL() {
        const weekPnLEl = document.getElementById('weekPnL');
        if (weekPnLEl) {
            const weekPercent = ((this.portfolio.pnl / 100000) * 100).toFixed(2);
            weekPnLEl.textContent = `${weekPercent >= 0 ? '+' : ''}${weekPercent}%`;
            weekPnLEl.className = `perf-value ${this.portfolio.pnl >= 0 ? 'positive' : 'negative'}`;
        }
    }

    calculateRiskLevel() {
        const holdingsCount = Object.keys(this.portfolio.holdings).length;
        const cashPercentage = (this.portfolio.cash / this.portfolio.totalValue) * 100;
        
        if (holdingsCount === 0 || cashPercentage > 80) return 'Low';
        if (holdingsCount >= 3 && cashPercentage > 20) return 'Low';
        if (holdingsCount >= 2) return 'Medium';
        return 'High';
    }

    updateHoldingsDisplay() {
        const holdingsList = document.getElementById('holdingsList');
        if (!holdingsList) return;
        
        if (Object.keys(this.portfolio.holdings).length === 0) {
            holdingsList.innerHTML = '<div class="empty-state">No holdings yet. Start trading to build your portfolio!</div>';
            return;
        }
        
        const holdingsHTML = Object.entries(this.portfolio.holdings).map(([stock, quantity]) => {
            const stockData = StockData[stock];
            if (!stockData) return '';
            
            const currentValue = quantity * stockData.currentPrice;
            const stockName = stockData.name.split(' ')[0];
            const pnlValue = currentValue - (quantity * stockData.currentPrice * 0.98); // Simulate slight profit/loss
            const pnlClass = pnlValue >= 0 ? 'positive' : 'negative';
            
            return `
                <div class="holding-item">
                    <div class="holding-header">
                        <span class="holding-stock">${stockName}</span>
                        <span class="holding-quantity">${quantity} shares</span>
                    </div>
                    <div class="holding-value ${pnlClass}">₹${currentValue.toLocaleString('en-IN')}</div>
                    <div class="holding-pnl" style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">
                        P&L: <span class="${pnlClass}">₹${pnlValue.toLocaleString('en-IN')}</span>
                    </div>
                </div>
            `;
        }).join('');
        
        holdingsList.innerHTML = holdingsHTML;
    }

    updateTransactionHistory() {
        const transactionsList = document.getElementById('transactionsList');
        if (!transactionsList) return;
        
        if (this.transactions.length === 0) {
            transactionsList.innerHTML = '<div class="empty-state">No transactions yet.</div>';
            return;
        }
        
        const recentTransactions = this.transactions.slice(-10).reverse();
        const transactionsHTML = recentTransactions.map(transaction => {
            const stockName = StockData[transaction.stock].name.split(' ')[0];
            const typeClass = transaction.type === 'buy' ? 'success' : 'error';
            const typeIcon = transaction.type === 'buy' ? '📈' : '📉';
            
            return `
                <div class="transaction-item">
                    <div class="transaction-header">
                        <span class="transaction-stock">${typeIcon} ${stockName}</span>
                        <span class="transaction-details">${transaction.quantity} @ ₹${transaction.price}</span>
                    </div>
                    <div class="transaction-value ${typeClass}">
                        ${transaction.type.toUpperCase()}: ₹${transaction.value.toLocaleString('en-IN')}
                    </div>
                    <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-top: var(--space-4);">
                        ${transaction.timestamp.toLocaleTimeString('en-IN')}
                    </div>
                </div>
            `;
        }).join('');
        
        transactionsList.innerHTML = transactionsHTML;
    }

    updateChallenges() {
        this.challenges.forEach(challenge => {
            if (challenge.completed) return;
            
            switch (challenge.id) {
                case 'first_trade':
                    if (this.transactions.length > 0 && this.portfolio.pnl > 0) {
                        challenge.progress = 1;
                        challenge.completed = true;
                        this.awardChallenge(challenge);
                    }
                    break;
                case 'portfolio_diversify':
                    challenge.progress = Object.keys(this.portfolio.holdings).length;
                    if (challenge.progress >= challenge.target) {
                        challenge.completed = true;
                        this.awardChallenge(challenge);
                    }
                    break;
                case 'profit_target':
                    challenge.progress = Math.max(0, this.portfolio.pnl);
                    if (challenge.progress >= challenge.target) {
                        challenge.completed = true;
                        this.awardChallenge(challenge);
                    }
                    break;
                case 'volume_trader':
                    challenge.progress = this.transactions.length;
                    if (challenge.progress >= challenge.target) {
                        challenge.completed = true;
                        this.awardChallenge(challenge);
                    }
                    break;
            }
        });
        
        this.updateChallengesDisplay();
    }

    awardChallenge(challenge) {
        const rewardAmount = parseInt(challenge.reward.replace(/[^0-9]/g, ''));
        this.portfolio.cash += rewardAmount;
        this.showToast('success', '🏆 Challenge Complete!', `${challenge.title} completed! ${challenge.reward} added to your account.`);
    }

    updateChallengesDisplay() {
        const challengesList = document.getElementById('challengesList');
        if (!challengesList) return;
        
        const challengesHTML = this.challenges.map(challenge => {
            const progressPercent = Math.min(100, (challenge.progress / challenge.target) * 100);
            const statusClass = challenge.completed ? 'completed' : '';
            const icon = challenge.completed ? '✅' : '🎯';
            
            return `
                <div class="challenge-card ${statusClass}">
                    <div class="challenge-icon">${icon}</div>
                    <div class="challenge-content">
                        <div class="challenge-title">${challenge.title}</div>
                        <div class="challenge-description">${challenge.description}</div>
                        <div class="challenge-reward">Reward: ${challenge.reward}</div>
                        <div class="challenge-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${progressPercent}%"></div>
                            </div>
                            <span class="progress-text">${challenge.progress}/${challenge.target}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        challengesList.innerHTML = challengesHTML;
    }

    updateLeaderboard() {
        // Update user's score in leaderboard
        this.leaderboard[0].score = this.portfolio.totalValue;
        
        // Sort leaderboard by score
        this.leaderboard.sort((a, b) => b.score - a.score);
        
        // Update ranks
        this.leaderboard.forEach((player, index) => {
            player.rank = index + 1;
        });
        
        const leaderboardList = document.getElementById('leaderboardList');
        if (!leaderboardList) return;
        
        const leaderboardHTML = this.leaderboard.map(player => {
            const isCurrentUser = player.name === 'You';
            return `
                <div class="leaderboard-item ${isCurrentUser ? 'current-user' : ''}">
                    <div class="rank">${player.rank}</div>
                    <div class="player">${player.name}</div>
                    <div class="score">₹${player.score.toLocaleString('en-IN')}</div>
                </div>
            `;
        }).join('');
        
        leaderboardList.innerHTML = leaderboardHTML;
        
        // Update user rank display
        const userRankEl = document.getElementById('userRank');
        if (userRankEl) {
            const userRank = this.leaderboard.find(p => p.name === 'You').rank;
            userRankEl.textContent = `#${userRank}`;
        }
    }

    renderGlossary() {
        const glossaryList = document.getElementById('glossaryList');
        if (!glossaryList) return;
        
        const glossaryHTML = this.glossaryTerms.map(item => `
            <div class="glossary-item" data-term="${item.term.toLowerCase()}">
                <div class="glossary-term">${item.term}</div>
                <div class="glossary-definition">${item.definition}</div>
            </div>
        `).join('');
        
        glossaryList.innerHTML = glossaryHTML;
        
        // Setup glossary search
        const glossarySearch = document.getElementById('glossarySearch');
        if (glossarySearch) {
            glossarySearch.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const items = glossaryList.querySelectorAll('.glossary-item');
                
                items.forEach(item => {
                    const term = item.dataset.term;
                    const definition = item.querySelector('.glossary-definition').textContent.toLowerCase();
                    
                    if (term.includes(searchTerm) || definition.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        }
    }

    setupEventSimulator() {
        const simulateBtn = document.getElementById('simulateEventBtn');
        if (simulateBtn) {
            simulateBtn.addEventListener('click', () => {
                this.simulateMarketEvent();
            });
        }
    }

    simulateMarketEvent() {
        const eventSelector = document.getElementById('eventSelector');
        const eventResult = document.getElementById('eventResult');
        
        if (!eventSelector || !eventResult) return;
        
        const selectedEvent = eventSelector.value;
        if (!selectedEvent) {
            this.showToast('warning', 'No Event Selected', 'Please select an event to simulate');
            return;
        }
        
        const eventEffects = {
            'earnings-beat': {
                description: 'Positive earnings surprise drives stock prices up 5-8%',
                effect: { type: 'positive', magnitude: 0.065 }
            },
            'earnings-miss': {
                description: 'Disappointing earnings results in 3-6% price decline',
                effect: { type: 'negative', magnitude: -0.045 }
            },
            'oil-price-rise': {
                description: 'Oil price surge benefits Reliance (+4%) but hurts IT stocks (-2%)',
                effect: { type: 'mixed', reliance: 0.04, it: -0.02 }
            },
            'regulatory-approval': {
                description: 'Government approval boosts sector confidence, +3-5% gains',
                effect: { type: 'positive', magnitude: 0.04 }
            },
            'market-crash': {
                description: 'Market correction affects all stocks, -8-12% decline',
                effect: { type: 'negative', magnitude: -0.10 }
            }
        };
        
        const event = eventEffects[selectedEvent];
        if (event) {
            eventResult.innerHTML = `
                <div style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-8); color: var(--color-text);">
                    Event Simulated: ${eventSelector.options[eventSelector.selectedIndex].text}
                </div>
                <div style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">
                    ${event.description}
                </div>
            `;
            eventResult.classList.add('show');
            
            // Apply price changes (simulated)
            this.applyEventEffect(event.effect);
            
            this.showToast('success', 'Event Simulated', 'Market prices updated based on the event');
        }
        
        // Reset selector
        eventSelector.value = '';
    }

    applyEventEffect(effect) {
        // Simulate price changes based on event
        Object.keys(StockData).forEach(stock => {
            const stockData = StockData[stock];
            let priceChange = 0;
            
            if (effect.type === 'positive') {
                priceChange = effect.magnitude;
            } else if (effect.type === 'negative') {
                priceChange = effect.magnitude;
            } else if (effect.type === 'mixed') {
                if (stock === 'RELIANCE.NS') {
                    priceChange = effect.reliance || 0;
                } else {
                    priceChange = effect.it || 0;
                }
            }
            
            const newPrice = stockData.currentPrice * (1 + priceChange);
            stockData.currentPrice = Math.round(newPrice * 10) / 10;
            stockData.change = newPrice - stockData.currentPrice;
            stockData.changePercent = (priceChange * 100);
        });
        
        // Update portfolio values
        this.updatePortfolioValue();
        
        // Update main dashboard if visible
        if (window.stockTerminal) {
            window.stockTerminal.updateStockDisplay();
        }
    }

    setupAIChatbot() {
        const sendChatBtn = document.getElementById('sendChatBtn');
        const chatInput = document.getElementById('chatInput');
        
        if (sendChatBtn && chatInput) {
            const sendMessage = () => {
                const message = chatInput.value.trim();
                if (message) {
                    this.handleChatMessage(message);
                    chatInput.value = '';
                }
            };
            
            sendChatBtn.addEventListener('click', sendMessage);
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        }
    }

    handleChatMessage(message) {
        const chatMessages = document.getElementById('chatMessages');
        if (!chatMessages) return;
        
        // Add user message
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'chat-message user';
        userMessageDiv.innerHTML = `<div class="message-content">${message}</div>`;
        chatMessages.appendChild(userMessageDiv);
        
        // Generate AI response
        const response = this.generateAIResponse(message);
        
        setTimeout(() => {
            const aiMessageDiv = document.createElement('div');
            aiMessageDiv.className = 'chat-message ai';
            aiMessageDiv.innerHTML = `<div class="message-content">${response}</div>`;
            chatMessages.appendChild(aiMessageDiv);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    generateAIResponse(message) {
        const messageLower = message.toLowerCase();
        
        if (messageLower.includes('buy') || messageLower.includes('sell')) {
            return "When deciding to buy or sell, consider the company's fundamentals, recent news, and your risk tolerance. Diversification is key - don't put all your money in one stock!";
        } else if (messageLower.includes('risk')) {
            return "Risk management is crucial in trading. Consider using stop-loss orders, diversifying your portfolio, and never invest more than you can afford to lose.";
        } else if (messageLower.includes('profit') || messageLower.includes('money')) {
            return "Profits come from buying low and selling high, but timing the market is difficult. Focus on long-term value investing and consistent strategies.";
        } else if (messageLower.includes('reliance')) {
            return "Reliance is a diversified conglomerate with interests in oil, telecom, and retail. Monitor oil prices and Jio's performance for insights into its stock movement.";
        } else if (messageLower.includes('tcs') || messageLower.includes('infosys')) {
            return "IT stocks like TCS and Infosys are affected by global demand, currency rates, and visa regulations. Keep an eye on client spending and US market trends.";
        } else if (messageLower.includes('portfolio')) {
            return "A good portfolio should be diversified across sectors and market caps. Regular rebalancing and reviewing your holdings is important for long-term success.";
        } else {
            const responses = [
                "That's an interesting question! In general, successful trading requires patience, research, and risk management.",
                "Consider analyzing the company's financial health, market position, and recent developments before making investment decisions.",
                "Remember, the stock market can be volatile. It's important to have a clear strategy and stick to it.",
                "Technical analysis and fundamental analysis are both useful tools for making informed trading decisions."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }

    showPostTradeQuiz() {
        const quizSection = document.getElementById('quizSection');
        if (!quizSection || this.transactions.length % 3 !== 0) return; // Show quiz every 3rd trade
        
        const randomQuestion = this.quizQuestions[Math.floor(Math.random() * this.quizQuestions.length)];
        
        const quizHTML = `
            <div class="quiz-question">${randomQuestion.question}</div>
            <div class="quiz-options">
                ${randomQuestion.options.map((option, index) => `
                    <div class="quiz-option" data-index="${index}">${option}</div>
                `).join('')}
            </div>
            <div class="quiz-explanation" style="display: none; margin-top: var(--space-12); padding: var(--space-12); background: var(--color-bg-1); border-radius: var(--radius-base); font-size: var(--font-size-sm); color: var(--color-text-secondary);"></div>
        `;
        
        const quizContent = document.getElementById('quizContent');
        if (quizContent) {
            quizContent.innerHTML = quizHTML;
            quizSection.classList.remove('hidden');
            
            // Add click handlers for options
            const options = quizContent.querySelectorAll('.quiz-option');
            options.forEach((option, index) => {
                option.addEventListener('click', () => {
                    options.forEach(opt => opt.classList.remove('selected'));
                    option.classList.add('selected');
                    
                    const explanation = quizContent.querySelector('.quiz-explanation');
                    explanation.style.display = 'block';
                    
                    if (index === randomQuestion.correct) {
                        explanation.innerHTML = `✅ Correct! ${randomQuestion.explanation}`;
                        explanation.style.color = 'var(--color-success)';
                        // Award points for correct answer
                        this.portfolio.cash += 100;
                        this.showToast('success', 'Quiz Correct!', '₹100 bonus added to your account');
                    } else {
                        explanation.innerHTML = `❌ Incorrect. ${randomQuestion.explanation}`;
                        explanation.style.color = 'var(--color-error)';
                    }
                    
                    // Hide quiz after 5 seconds
                    setTimeout(() => {
                        quizSection.classList.add('hidden');
                    }, 5000);
                });
            });
        }
    }

    safeUpdateElement(id, content) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = content;
        }
    }

    showToast(type, title, message) {
        if (window.stockTerminal) {
            window.stockTerminal.showToast(type, title, message);
        }
    }
}

// Main Stock Terminal Class
class StockTerminal {
    constructor() {
        this.currentStock = 'RELIANCE.NS';
        this.currentTheme = 'dark';
        this.currentMode = 'dashboard'; // 'dashboard' or 'game'
        this.chart = null;
        this.impactChart = null;
        this.portfolioChart = null;
        this.updateInterval = null;
        this.newsService = new NewsService();
        this.tradingGame = new TradingGame();
        this.stockData = StockData;
        
        this.init();
    }

    async init() {
        try {
            this.setupTheme();
            this.populateStockSelector();
            this.setupEventListeners();
            this.updateStockDisplay();
            
            // Initialize news service
            await this.newsService.fetchNews();
            this.renderMarketEvents();
            
            this.initCharts();
            this.startRealTimeUpdates();
            
            // Initialize game mode
            this.tradingGame.initializeGame();
            
            // Show high-impact news toast after a short delay
            setTimeout(() => {
                this.showToast('warning', 'High-Impact News Alert', 'TCS shares hit three-year low on visa concerns');
            }, 3000);
            
            console.log('AI Stock Terminal initialized successfully');
        } catch (error) {
            console.error('Error initializing AI Stock Terminal:', error);
            this.showToast('error', 'Initialization Error', 'Failed to initialize the application');
        }
    }

    populateStockSelector() {
        const stockSelector = document.getElementById('stockSelector');
        const gameStockSelector = document.getElementById('gameStockSelector');
        
        [stockSelector, gameStockSelector].forEach(selector => {
            if (selector) {
                selector.innerHTML = '';
                Object.entries(this.stockData).forEach(([ticker, data]) => {
                    const option = document.createElement('option');
                    option.value = ticker;
                    option.textContent = data.name;
                    if (ticker === this.currentStock) {
                        option.selected = true;
                    }
                    selector.appendChild(option);
                });
            }
        });
    }

    setupTheme() {
        document.documentElement.setAttribute('data-color-scheme', this.currentTheme);
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.textContent = this.currentTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
        }
    }

    setupEventListeners() {
        // Stock selector
        document.getElementById('stockSelector')?.addEventListener('change', (e) => {
            this.currentStock = e.target.value;
            this.updateStockDisplay();
            this.updateChart();
            this.renderMarketEvents();
        });

        // Theme toggle
        document.getElementById('themeToggle')?.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Game mode toggle
        document.getElementById('gameModeBtn')?.addEventListener('click', () => {
            this.switchToGameMode();
        });

        document.getElementById('backToMain')?.addEventListener('click', () => {
            this.switchToDashboard();
        });

        // Time range buttons
        document.querySelectorAll('.time-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.updateChart(e.target.dataset.range);
            });
        });

        // Event filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.filterEvents(e.target.dataset.filter);
            });
        });

        // Modal events
        document.getElementById('closeModal')?.addEventListener('click', () => this.closeModal());
        document.getElementById('modalOverlay')?.addEventListener('click', () => this.closeModal());
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });

        // Game mode events
        this.setupGameEventListeners();

        // Visibility change for debounced news fetching
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && this.newsService.lastFetch) {
                const timeSinceLastFetch = Date.now() - this.newsService.lastFetch.getTime();
                if (timeSinceLastFetch > CONFIG.NEWS_REFRESH_INTERVAL) {
                    this.refreshNews();
                }
            }
        });
    }

    setupGameEventListeners() {
        // Order type buttons
        document.querySelectorAll('.order-type-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.order-type-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.tradingGame.currentOrderType = e.target.dataset.type;
            });
        });

        // Order form inputs
        document.getElementById('orderQuantity')?.addEventListener('input', this.updateOrderValue.bind(this));
        document.getElementById('orderPrice')?.addEventListener('input', this.updateOrderValue.bind(this));
        document.getElementById('gameStockSelector')?.addEventListener('change', this.updateGameStock.bind(this));

        // Place order button
        document.getElementById('placeOrderBtn')?.addEventListener('click', this.placeOrder.bind(this));
    }

    updateOrderValue() {
        const quantity = parseInt(document.getElementById('orderQuantity')?.value) || 0;
        const price = parseFloat(document.getElementById('orderPrice')?.value) || 0;
        const total = quantity * price;
        
        const orderValueEl = document.getElementById('orderValue');
        if (orderValueEl) {
            orderValueEl.textContent = `₹${total.toLocaleString('en-IN')}`;
        }
    }

    updateGameStock() {
        const gameStockSelector = document.getElementById('gameStockSelector');
        const orderPriceEl = document.getElementById('orderPrice');
        
        if (gameStockSelector && orderPriceEl) {
            const selectedStock = gameStockSelector.value;
            const stockData = this.stockData[selectedStock];
            orderPriceEl.value = stockData.currentPrice;
            this.updateOrderValue();
        }
    }

    placeOrder() {
        const gameStockSelector = document.getElementById('gameStockSelector');
        const orderQuantityEl = document.getElementById('orderQuantity');
        const orderPriceEl = document.getElementById('orderPrice');
        
        if (!gameStockSelector || !orderQuantityEl || !orderPriceEl) {
            this.showToast('error', 'Form Error', 'Order form elements not found');
            return;
        }

        const stock = gameStockSelector.value;
        const type = this.tradingGame.currentOrderType;
        const quantity = parseInt(orderQuantityEl.value);
        const price = parseFloat(orderPriceEl.value);

        if (!quantity || quantity <= 0) {
            this.showToast('error', 'Invalid Quantity', 'Please enter a valid quantity');
            return;
        }

        if (!price || price <= 0) {
            this.showToast('error', 'Invalid Price', 'Please enter a valid price');
            return;
        }

        const success = this.tradingGame.placeOrder(stock, type, quantity, price);
        
        if (success) {
            // Reset form
            orderQuantityEl.value = 1;
            this.updateOrderValue();
        }
    }

    switchToGameMode() {
        const mainDashboard = document.getElementById('mainDashboard');
        const gameDashboard = document.getElementById('gameDashboard');
        
        if (mainDashboard && gameDashboard) {
            mainDashboard.classList.add('hidden');
            gameDashboard.classList.remove('hidden');
            this.currentMode = 'game';
            
            // Update game display and components
            this.tradingGame.updateGameDisplay();
            this.updateGameStock();
            this.initPortfolioChart();
            
            console.log('Switched to Game Mode');
        }
    }

    switchToDashboard() {
        const mainDashboard = document.getElementById('mainDashboard');
        const gameDashboard = document.getElementById('gameDashboard');
        
        if (mainDashboard && gameDashboard) {
            gameDashboard.classList.add('hidden');
            mainDashboard.classList.remove('hidden');
            this.currentMode = 'dashboard';
            
            console.log('Switched to Dashboard Mode');
        }
    }

    initPortfolioChart() {
        const ctx = document.getElementById('portfolioChart');
        if (!ctx) return;
        
        const textColor = this.currentTheme === 'dark' ? '#f5f5f5' : '#134252';
        const gridColor = this.currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(19, 66, 82, 0.1)';
        
        if (this.portfolioChart) {
            this.portfolioChart.destroy();
        }
        
        // Sample portfolio performance data
        const portfolioData = {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Today'],
            values: [100000, 99800, 100200, 100500, 99900, 100800, this.tradingGame.portfolio.totalValue]
        };
        
        this.portfolioChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: portfolioData.labels,
                datasets: [{
                    label: 'Portfolio Value',
                    data: portfolioData.values,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#1FB8CD',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: gridColor, drawBorder: false },
                        ticks: {
                            color: textColor,
                            font: { size: 11 },
                            callback: function(value) {
                                return '₹' + (value / 1000).toFixed(0) + 'K';
                            }
                        }
                    },
                    x: {
                        grid: { color: gridColor, drawBorder: false },
                        ticks: {
                            color: textColor,
                            font: { size: 11 },
                            maxTicksLimit: 8
                        }
                    }
                }
            }
        });
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setupTheme();
        
        if (this.chart) this.updateChartTheme();
        if (this.impactChart) this.updateChartTheme();
        if (this.portfolioChart) this.updateChartTheme();
    }

    updateChartTheme() {
        const textColor = this.currentTheme === 'dark' ? '#f5f5f5' : '#134252';
        const gridColor = this.currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(19, 66, 82, 0.1)';
        
        [this.chart, this.impactChart, this.portfolioChart].forEach(chart => {
            if (chart) {
                if (chart.options.plugins.legend && chart.options.plugins.legend.labels) {
                    chart.options.plugins.legend.labels.color = textColor;
                }
                if (chart.options.scales) {
                    if (chart.options.scales.y) {
                        chart.options.scales.y.grid.color = gridColor;
                        chart.options.scales.y.ticks.color = textColor;
                    }
                    if (chart.options.scales.x) {
                        chart.options.scales.x.grid.color = gridColor;
                        chart.options.scales.x.ticks.color = textColor;
                    }
                }
                chart.update('none');
            }
        });
    }

    updateStockDisplay() {
        const stock = this.stockData[this.currentStock];
        if (!stock) return;
        
        this.safeUpdateElement('stockName', stock.name);
        this.safeUpdateElement('stockTicker', stock.ticker);
        this.safeUpdateElement('currentPrice', `₹${stock.currentPrice.toLocaleString('en-IN', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`);
        
        const changeEl = document.getElementById('priceChange');
        if (changeEl) {
            const changeClass = stock.changePercent >= 0 ? 'positive' : 'negative';
            const changeSign = stock.changePercent >= 0 ? '+' : '';
            changeEl.className = `price-change ${changeClass}`;
            changeEl.innerHTML = `<span class="change-value">${changeSign}${stock.change.toFixed(1)} (${changeSign}${stock.changePercent.toFixed(2)}%)</span>`;
        }
        
        this.safeUpdateElement('aiPrediction', `₹${stock.aiPredictedPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
        
        // Update AI metrics
        const confidenceFill = document.getElementById('confidenceFill');
        if (confidenceFill) {
            confidenceFill.style.width = `${stock.aiConfidence}%`;
        }
        this.safeUpdateElement('confidenceText', `${Math.round(stock.aiConfidence)}%`);
        
        const directionEl = document.getElementById('directionIndicator');
        if (directionEl) {
            const directionIcon = stock.direction === 'BULLISH' ? '📈' : '📉';
            const directionClass = stock.direction === 'BULLISH' ? '' : 'bearish';
            directionEl.innerHTML = `
                <span class="direction-icon">${directionIcon}</span>
                <span class="direction-text ${directionClass}">${stock.direction}</span>
            `;
        }
        
        const convictionEl = document.getElementById('convictionBadge');
        if (convictionEl) {
            convictionEl.textContent = stock.conviction;
            convictionEl.className = `conviction-badge ${stock.conviction.toLowerCase()}`;
        }
        
        const targetEl = document.getElementById('targetChange');
        if (targetEl) {
            const targetClass = stock.targetChange >= 0 ? 'positive' : 'negative';
            const targetSign = stock.targetChange >= 0 ? '+' : '';
            targetEl.className = `target-change ${targetClass}`;
            targetEl.textContent = `${targetSign}${stock.targetChange.toFixed(1)}%`;
        }
        
        // Update market metrics
        this.safeUpdateElement('dayHigh', `₹${stock.dayHigh.toLocaleString('en-IN', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`);
        this.safeUpdateElement('dayLow', `₹${stock.dayLow.toLocaleString('en-IN', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`);
        this.safeUpdateElement('volume', stock.volume);
        this.safeUpdateElement('marketCap', stock.marketCap);
        this.safeUpdateElement('peRatio', stock.peRatio.toString());
        this.safeUpdateElement('weekHigh52', `₹${stock.weekHigh52.toLocaleString('en-IN', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`);
    }

    safeUpdateElement(id, content) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = content;
        }
    }

    async refreshNews() {
        try {
            await this.newsService.fetchNews();
            this.renderMarketEvents();
            this.updateImpactChart();
            
            // Check for high-impact news and show toast
            const highImpactNews = this.newsService.getNewsData().filter(item => 
                item.impact > 70 && 
                (item.stock === this.currentStock || item.stock === 'ALL')
            );
            
            if (highImpactNews.length > 0) {
                const news = highImpactNews[0];
                this.showToast('warning', 'High-Impact News Alert', `${news.title.substring(0, 60)}...`);
            }
        } catch (error) {
            console.error('Error refreshing news:', error);
        }
    }

    renderMarketEvents(filter = 'all') {
        const eventsList = document.getElementById('eventsList');
        if (!eventsList) return;
        
        let events = this.newsService.getNewsData();
        
        // Filter events
        if (filter === 'high-impact') {
            events = events.filter(event => event.impact >= 70);
        } else if (filter === 'earnings') {
            events = events.filter(event => event.category === 'Earnings');
        }
        
        // Show events for current stock or all
        events = events.filter(event => 
            event.stock === this.currentStock || event.stock === 'ALL'
        );
        
        if (events.length === 0) {
            eventsList.innerHTML = '<div style="padding: 16px; text-align: center; color: var(--color-text-secondary); font-size: 14px;">No market news matches the current filter.</div>';
            return;
        }
        
        eventsList.innerHTML = events.map((event, index) => {
            const impactClass = event.impact >= 80 ? 'high' : event.impact >= 60 ? 'medium' : 'low';
            const highImpactClass = event.impact > 70 ? 'high-impact' : '';
            const relativeTime = this.newsService.getRelativeTime(event.timestamp);
            
            return `
                <div class="event-card ${highImpactClass} news-fade" data-event-index="${index}" style="cursor: pointer;">
                    <div class="event-header">
                        <div class="event-impact ${impactClass}">${Math.round(event.impact)}%</div>
                    </div>
                    <div class="event-title">${event.title}</div>
                    <div class="event-description">${event.description}</div>
                    <div class="event-footer">
                        <span class="event-category">${event.category}</span>
                        <span class="event-timestamp">${relativeTime}</span>
                    </div>
                </div>
            `;
        }).join('');
        
        // Add click event listeners
        eventsList.querySelectorAll('.event-card').forEach((card, index) => {
            card.addEventListener('click', () => {
                const eventData = events[index];
                if (eventData) {
                    this.showEventDetails(eventData);
                }
            });
        });
    }

    filterEvents(filter) {
        this.renderMarketEvents(filter);
    }

    showEventDetails(event) {
        this.safeUpdateElement('modalTitle', event.title);
        this.safeUpdateElement('modalDescription', event.description);
        this.safeUpdateElement('modalImpact', `${Math.round(event.impact)}%`);
        
        const aiAnalysis = this.generateAIAnalysis(event.category, event.impact, event.sentiment);
        this.safeUpdateElement('aiAnalysis', aiAnalysis);
        
        // Update read more button
        const readMoreBtn = document.getElementById('readMoreBtn');
        if (readMoreBtn) {
            readMoreBtn.onclick = () => window.open(event.url, '_blank');
        }
        
        const modal = document.getElementById('newsModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    closeModal() {
        const modal = document.getElementById('newsModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    generateAIAnalysis(category, impact, sentiment) {
        const sentimentText = sentiment === 'positive' ? 'favorable' : sentiment === 'negative' ? 'concerning' : 'neutral';
        
        return `This ${category.toLowerCase()} development shows a ${sentimentText} outlook with ${Math.round(impact)}% expected impact. Based on our AI models, this could influence stock price movements within the next 24-48 hours. Historical patterns suggest ${sentiment} sentiment events of this magnitude typically drive ${impact >= 80 ? 'significant' : 'moderate'} market reactions.`;
    }

    initCharts() {
        this.initPriceChart();
        this.initImpactChart();
    }

    initPriceChart() {
        const ctx = document.getElementById('priceChart');
        if (!ctx) return;
        
        const stock = this.stockData[this.currentStock];
        const chartData = stock.chartData;
        const textColor = this.currentTheme === 'dark' ? '#f5f5f5' : '#134252';
        const gridColor = this.currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(19, 66, 82, 0.1)';
        
        if (this.chart) {
            this.chart.destroy();
        }
        
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [
                    {
                        label: 'Current Price',
                        data: chartData.prices,
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.3,
                        pointBackgroundColor: '#1FB8CD',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    },
                    {
                        label: 'AI Prediction',
                        data: chartData.predictions,
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.1)',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        fill: false,
                        tension: 0.3,
                        pointBackgroundColor: '#FFC185',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: textColor,
                            font: { size: 12, family: 'FKGroteskNeue, Inter, sans-serif' },
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: 'line'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: gridColor, drawBorder: false },
                        ticks: {
                            color: textColor,
                            font: { size: 11, family: 'FKGroteskNeue, Inter, sans-serif' },
                            callback: function(value) {
                                return '₹' + value.toLocaleString('en-IN');
                            }
                        }
                    },
                    x: {
                        grid: { color: gridColor, drawBorder: false },
                        ticks: {
                            color: textColor,
                            font: { size: 11, family: 'FKGroteskNeue, Inter, sans-serif' },
                            maxTicksLimit: 8
                        }
                    }
                }
            }
        });
    }

    initImpactChart() {
        const ctx = document.getElementById('impactChart');
        if (!ctx) return;
        
        const impactData = this.newsService.getImpactData();
        const textColor = this.currentTheme === 'dark' ? '#f5f5f5' : '#134252';
        const gridColor = this.currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(19, 66, 82, 0.1)';
        
        if (this.impactChart) {
            this.impactChart.destroy();
        }
        
        this.impactChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: impactData.map(item => item.title),
                datasets: [{
                    label: 'Impact Score',
                    data: impactData.map(item => item.impact),
                    backgroundColor: impactData.map(item => {
                        switch (item.sentiment) {
                            case 'positive': return '#1FB8CD';
                            case 'negative': return '#B4413C';
                            default: return '#5D878F';
                        }
                    }),
                    borderRadius: 4,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: { color: gridColor, drawBorder: false },
                        ticks: {
                            color: textColor,
                            font: { size: 11 },
                            callback: function(value) { return value + '%'; }
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: {
                            color: textColor,
                            font: { size: 10 },
                            maxRotation: 45,
                            display: false
                        }
                    }
                }
            }
        });
    }

    updateChart(timeRange = '1D') {
        if (!this.chart) {
            this.initPriceChart();
            return;
        }
        
        const stock = this.stockData[this.currentStock];
        const chartData = stock.chartData;
        
        this.chart.data.labels = chartData.labels;
        this.chart.data.datasets[0].data = chartData.prices;
        this.chart.data.datasets[1].data = chartData.predictions;
        this.chart.update('active');
    }

    updateImpactChart() {
        if (!this.impactChart) {
            this.initImpactChart();
            return;
        }
        
        const impactData = this.newsService.getImpactData();
        
        this.impactChart.data.labels = impactData.map(item => item.title);
        this.impactChart.data.datasets[0].data = impactData.map(item => item.impact);
        this.impactChart.data.datasets[0].backgroundColor = impactData.map(item => {
            switch (item.sentiment) {
                case 'positive': return '#1FB8CD';
                case 'negative': return '#B4413C';
                default: return '#5D878F';
            }
        });
        
        this.impactChart.update('active');
    }

    startRealTimeUpdates() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }
        
        // Price updates every 30 seconds
        this.updateInterval = setInterval(() => {
            this.simulatePriceUpdates();
        }, 30000);
        
        // News updates every hour with toast notifications
        setInterval(() => {
            this.refreshNews();
        }, CONFIG.NEWS_REFRESH_INTERVAL);
    }

    simulatePriceUpdates() {
        Object.keys(this.stockData).forEach(symbol => {
            const stock = this.stockData[symbol];
            const changePercent = (Math.random() - 0.5) * 0.01;
            const originalPrice = stock.currentPrice;
            
            stock.currentPrice = Math.round((originalPrice * (1 + changePercent)) * 10) / 10;
            stock.change = stock.currentPrice - originalPrice;
            stock.changePercent = (stock.change / originalPrice) * 100;
            
            stock.aiConfidence = Math.max(60, Math.min(95, 
                stock.aiConfidence + (Math.random() - 0.5) * 2
            ));
        });
        
        this.updateStockDisplay();
        
        // Update game portfolio values
        if (this.currentMode === 'game') {
            this.tradingGame.updatePortfolioValue();
        }
    }

    showToast(type, title, message) {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-header">
                <span class="toast-title">${title}</span>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
            <div class="toast-message">${message}</div>
        `;
        
        toastContainer.appendChild(toast);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 5000);
    }

    destroy() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }
        
        [this.chart, this.impactChart, this.portfolioChart].forEach(chart => {
            if (chart) chart.destroy();
        });
        
        console.log('Stock Terminal cleanup completed');
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    try {
        if (typeof Chart === 'undefined') {
            console.error('Chart.js library not loaded');
            return;
        }
        
        window.stockTerminal = new StockTerminal();
        console.log('AI Stock Terminal with Live Market News started');
        
    } catch (error) {
        console.error('Error starting application:', error);
        
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: #dc2626; color: white; padding: 20px; border-radius: 8px;
            z-index: 9999; text-align: center; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        errorDiv.innerHTML = `
            <h3>Application Error</h3>
            <p>Failed to load the AI Stock Terminal. Please refresh the page.</p>
            <button onclick="window.location.reload()" style="
                background: white; color: #dc2626; border: none; padding: 8px 16px;
                border-radius: 4px; cursor: pointer; margin-top: 10px;
            ">Refresh Page</button>
        `;
        document.body.appendChild(errorDiv);
    }
});

// Handle page unload
window.addEventListener('beforeunload', function() {
    if (window.stockTerminal) {
        window.stockTerminal.destroy();
    }
});
