
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Premium = () => {
  const [annualBilling, setAnnualBilling] = useState(true);

  const plans = [
    {
      name: "Monthly",
      price: annualBilling ? 12.99 : 14.99,
      description: "Pay month-to-month with flexibility to cancel anytime",
      features: [
        "Access to all meditations",
        "Sleep stories and music",
        "New content added weekly",
        "Access on one device"
      ],
      recommended: false,
      savings: annualBilling ? "Save 13%" : ""
    },
    {
      name: "Annual",
      price: annualBilling ? 69.99 : 69.99,
      description: "Best value with a full year of unlimited access",
      features: [
        "Access to all meditations",
        "Sleep stories and music",
        "New content added weekly",
        "Access on unlimited devices",
        "Offline downloads",
        "Exclusive premium content"
      ],
      recommended: true,
      savings: "Save 61% vs monthly"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-calm-teal/20 via-calm-blue/10 to-calm-teal/5">
      <Header />
      
      <main className="flex-grow pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-calm-teal hover:text-calm-teal/80 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-medium mb-4">Unlock Premium Features</h1>
            <p className="text-muted-foreground max-w-2xl">
              Enhance your calm experience with premium features designed to help you sleep better, reduce stress, and find more peace in your daily life.
            </p>
          </div>
          
          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 inline-flex shadow-sm">
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  annualBilling 
                    ? 'bg-calm-teal text-white' 
                    : 'text-muted-foreground hover:bg-calm-teal/10'
                } cursor-pointer`}
                onClick={() => setAnnualBilling(true)}
              >
                Annual Billing
              </button>
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  !annualBilling 
                    ? 'bg-calm-teal text-white' 
                    : 'text-muted-foreground hover:bg-calm-teal/10'
                } cursor-pointer`}
                onClick={() => setAnnualBilling(false)}
              >
                Monthly Billing
              </button>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {plans.map((plan) => (
              <div 
                key={plan.name} 
                className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer relative ${
                  plan.recommended ? 'border-2 border-calm-teal' : 'border border-calm-teal/10'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-calm-teal text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                    Recommended
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-medium mb-1">{plan.name}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground ml-1">/year</span>
                    </div>
                    {plan.savings && (
                      <span className="text-green-600 text-sm font-medium">{plan.savings}</span>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-calm-teal mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.recommended 
                        ? 'bg-calm-teal hover:bg-calm-teal/90' 
                        : 'bg-white text-calm-teal border border-calm-teal hover:bg-calm-teal/10'
                    } cursor-pointer`}
                  >
                    {plan.recommended ? 'Get Started' : 'Select Plan'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-medium text-center mb-8">What Premium Members Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex text-yellow-400 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Calm Premium has completely transformed my sleep and anxiety levels. The premium content is well worth the investment."
                  </p>
                  <div className="font-medium">Sarah K.</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-medium text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "Can I cancel my subscription anytime?",
                  answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to premium features until the end of your billing period."
                },
                {
                  question: "What's included in the premium subscription?",
                  answer: "Premium includes unlimited access to all meditation programs, sleep stories, music tracks, masterclasses, and exclusive premium content. You'll also get offline downloads and multi-device access."
                },
                {
                  question: "Is there a free trial available?",
                  answer: "Yes, we offer a 7-day free trial for new users to explore all premium features before committing to a subscription."
                },
                {
                  question: "How do I switch between plans?",
                  answer: "You can switch between monthly and annual plans at any time from your account settings. If you upgrade, the change takes effect immediately. If you downgrade, the change takes effect at the end of your current billing period."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm cursor-pointer">
                  <h3 className="font-medium mb-2">{item.question}</h3>
                  <p className="text-muted-foreground text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Premium;
