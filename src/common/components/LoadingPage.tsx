import React from 'react'

const LoadingPage = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <div>
          <p style={{ marginBottom: '20px', fontSize: '35px' }}>로딩 중입니다. 잠시만 기다려주세요...</p>
        </div>
        <div>
          <img src="/images/loadingImage.gif" alt="로딩 이미지" style={{ width: '500px', height: '500px' }} />
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
