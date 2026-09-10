// App.tsx — trang chủ phu-xuan-react v0.1
// Buổi 2 · INT.7.18 — Web FrontEnd nâng cao

import Header from './components/Header'
import WelcomeBanner from './components/WelcomeBanner'
import Footer from './components/Footer'
import PostList from './features/posts/PostList'
import { APP_NAME } from './constants'

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <WelcomeBanner />
        <h1 style={{ marginTop: '2rem' }}>{APP_NAME}</h1>
        {/* Tích hợp danh sách bài viết từ API */}
        <PostList />
      </main>
      <Footer />
    </>
  )
}

export default App