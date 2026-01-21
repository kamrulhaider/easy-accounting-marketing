import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, BarChart3, PieChart, ArrowRight, CheckCircle2, LayoutDashboard, Database } from 'lucide-react'
import ContactModal from './ContactModal'

const LandingPage = ({ onGetStarted }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    }

    const features = [
        {
            icon: <BookOpen className="w-6 h-6 text-primary" />,
            title: "Journal Focused",
            description: "Stop worrying about complex modules. Just enter your daily journals, and we'll handle the rest."
        },
        {
            icon: <Database className="w-6 h-6 text-secondary" />,
            title: "Auto-Ledger",
            description: "Every journal entry is automatically posted to its respective accounts. Your general ledger is always up to date."
        },
        {
            icon: <LayoutDashboard className="w-6 h-6 text-success" />,
            title: "Dynamic Dashboards",
            description: "Visual representations of your cash flow, income, and expenses updated in real-time."
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-primary" />,
            title: "Balance Sheet",
            description: "Generate professional balance sheets and income statements instantly from your source journals."
        }
    ]

    return (
        <div className="landing-container">
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Decorative Background Elements */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>

            <nav className="landing-nav animate-fade-in">
                <div className="logo-container">
                    <img src="/logo.png" alt="EasyAccounting Logo" className="logo-img" />
                </div>
            </nav>

            <main className="landing-main">
                {/* Hero Section */}
                <section className="hero">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="hero-content"
                    >
                        <motion.span variants={itemVariants} className="badge">
                            Accounting Simplified
                        </motion.span>
                        <motion.h1 variants={itemVariants} className="hero-title">
                            One Journal Entry. <br />
                            <span className="text-gradient">Zero Headaches.</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="hero-subtitle">
                            The only accounting software that understands your time is valuable.
                            Input your journals, and let our engine build your ledgers, balance sheets,
                            and financial reports automatically.
                        </motion.p>
                        <motion.div variants={itemVariants} className="hero-actions">
                            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
                                Get Started Free <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="hero-preview"
                    >
                        <div className="preview-card glass">
                            <div className="preview-header">
                                <div className="dot red"></div>
                                <div className="dot yellow"></div>
                                <div className="dot green"></div>
                            </div>
                            <div className="preview-content">
                                <div className="journal-entry-mock">
                                    <div className="mock-row header">
                                        <span>Account</span>
                                        <span>Debit</span>
                                        <span>Credit</span>
                                    </div>
                                    <div className="mock-row">
                                        <span>Cash at Bank</span>
                                        <span className="text-success">$5,000.00</span>
                                        <span>-</span>
                                    </div>
                                    <div className="mock-row">
                                        <span>Service Revenue</span>
                                        <span>-</span>
                                        <span className="text-secondary">$5,000.00</span>
                                    </div>
                                </div>
                                <div className="preview-stats">
                                    <div className="stat-pill">Balance Sheet ✓</div>
                                    <div className="stat-pill">Ledger Updated ✓</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Features Grid */}
                <section className="features-section">
                    <div className="section-header">
                        <h2>Why "Easy" Accounting?</h2>
                        <p>We've stripped away the complexity of traditional ERPs to give you exactly what you need.</p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="feature-card glass"
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="philosophy-section glass">
                    <div className="philosophy-content">
                        <span className="badge-outline">Our Philosophy</span>
                        <h2>The Power of the Single Source of Truth</h2>
                        <p>
                            In traditional accounting, you manage customers, vendors, inventory, and banks in different silos.
                            In <strong>EasyAccounting</strong>, everything starts and ends with the <strong>Journal Entry</strong>.
                        </p>
                        <ul className="benefits-list">
                            <li><CheckCircle2 className="w-5 h-5 text-success" /> No more reconciling between modules</li>
                            <li><CheckCircle2 className="w-5 h-5 text-success" /> Full transparency of every dollar moved</li>
                            <li><CheckCircle2 className="w-5 h-5 text-success" /> Professional reports in one click</li>
                        </ul>
                    </div>
                    <div className="philosophy-visual">
                        <div className="visual-circle">
                            <div className="center-node">Journal</div>
                            <div className="node n1">Ledger</div>
                            <div className="node n2">Trial Balance</div>
                            <div className="node n3">Balance Sheet</div>
                            <div className="node n4">P&L State</div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="landing-footer">
                <p>© 2025 EasyAccounting. Making bookkeeping human again.</p>
                <div className="developer-badge">
                    <span>Developed by</span>
                    <img src="/software-company-logo.png" alt="Developer Logo" className="dev-logo" />
                </div>
            </footer>
        </div>
    )
}

export default LandingPage
