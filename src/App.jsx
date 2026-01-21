import { useState } from 'react'
import LandingPage from './components/LandingPage'
import './App.css'

function App() {
  const [isLanding, setIsLanding] = useState(true)
  const [balance, setBalance] = useState(12850.42)
  const [transactions, setTransactions] = useState([
    { id: 1, title: 'Adobe Creative Cloud', category: 'Software', amount: -52.99, date: '2023-12-24' },
    { id: 2, title: 'Client Payment - XYZ Corp', category: 'Income', amount: 2500.00, date: '2023-12-23' },
    { id: 3, title: 'Starbucks Coffee', category: 'Dining', amount: -7.50, date: '2023-12-22' },
    { id: 4, title: 'DigitalOcean Hosting', category: 'Infrastructure', amount: -24.00, date: '2023-12-20' },
  ])

  const addTransaction = () => {
    const newTx = {
      id: Date.now(),
      title: 'New Transaction',
      category: 'Miscellaneous',
      amount: -(Math.random() * 100).toFixed(2),
      date: new Date().toISOString().split('T')[0]
    }
    setTransactions([newTx, ...transactions])
    setBalance(prev => prev + parseFloat(newTx.amount))
  }

  if (isLanding) {
    return <LandingPage onGetStarted={() => setIsLanding(false)} />
  }

  return (
    <div className="app-container">
      <header className="header animate-fade-in">
        <div className="logo-container">
          <img src="/logo.png" alt="EasyAccounting Logo" className="logo-img" onClick={() => setIsLanding(true)} style={{ cursor: 'pointer' }} />
          <h1 className="brand-name">EasyAccounting</h1>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-secondary" onClick={() => setIsLanding(true)}>Back to Landing</button>
          <button className="action-button" onClick={addTransaction}>
            Add Transaction
          </button>
        </div>
      </header>

      <main className="dashboard-grid">
        <div className="card animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <p className="card-title">Total Balance</p>
          <p className="card-value">${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
          <div className="card-trend">
            <span className="trend-up">↑ 12.5%</span>
            <span style={{ color: 'var(--text-secondary)' }}>from last month</span>
          </div>
        </div>

        <div className="card animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="card-title">Monthly Income</p>
          <p className="card-value" style={{ color: 'var(--success)' }}>$8,420.00</p>
          <div className="card-trend">
            <span className="trend-up">↑ 5.2%</span>
            <span style={{ color: 'var(--text-secondary)' }}>target reached</span>
          </div>
        </div>

        <div className="card animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="card-title">Monthly Expenses</p>
          <p className="card-value" style={{ color: 'var(--danger)' }}>$3,512.18</p>
          <div className="card-trend">
            <span className="trend-down">↓ 2.4%</span>
            <span style={{ color: 'var(--text-secondary)' }}>savings improved</span>
          </div>
        </div>
      </main>

      <section className="card animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem' }}>Recent Transactions</h2>
          <span style={{ color: 'var(--primary)', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600 }}>View All</span>
        </div>

        <div className="transaction-list">
          {transactions.map(tx => (
            <div key={tx.id} className="transaction-item">
              <div className="transaction-info">
                <h4>{tx.title}</h4>
                <p>{tx.category} • {tx.date}</p>
              </div>
              <div className="transaction-amount" style={{ color: tx.amount > 0 ? 'var(--success)' : 'var(--text-primary)' }}>
                {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: 'auto', textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <p>© 2025 EasyAccounting. Making bookkeeping human again.</p>
        <div className="developer-badge">
          <span>Developed by</span>
          <img src="/software-company-logo.png" alt="Developer Logo" className="dev-logo" />
        </div>
      </footer>
    </div>
  )
}

export default App
