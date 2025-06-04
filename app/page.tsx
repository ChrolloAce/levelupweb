export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-blue-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Master Your Habits, Level Up Your Life
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our habit tracking app helps you build lasting positive habits and break negative ones. 
            Track your progress, stay motivated, and transform your daily routines into powerful tools for personal growth.
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon</h3>
              <p className="text-gray-600">
                Your journey to better habits starts here. Our app will help you track, 
                monitor, and achieve your personal development goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Habit Tracker?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Analytics</h3>
              <p className="text-gray-600">
                Track your progress with detailed insights and visualizations that show your habit-building journey.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Goal Setting</h3>
              <p className="text-gray-600">
                Set realistic goals and milestones that help you stay motivated and on track.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔔</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Reminders</h3>
              <p className="text-gray-600">
                Never miss a habit with intelligent reminders that adapt to your schedule and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Info Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Transform Your Life, One Habit at a Time
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our habit tracking app is designed to help you build consistency, track progress, 
            and achieve your personal development goals. Whether you want to exercise more, 
            read daily, or break bad habits, we provide the tools you need to succeed.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">📈 Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor your daily habits with streak counters, completion rates, and detailed analytics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">🏆 Achievement System</h3>
              <p className="text-gray-600">
                Earn badges and unlock achievements as you maintain your habits and reach milestones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 