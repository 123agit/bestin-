import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Dashboard = () => {
  const [discoveredUrls, setDiscoveredUrls] = useState([])
  const [discoveredJsFiles, setDiscoveredJsFiles] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setDiscoveredUrls([
      'https://example.com/api/users',
      'https://example.com/admin',
      'https://example.com/dashboard',
      'https://example.com/login',
    ])
    setDiscoveredJsFiles([
      'https://example.com/app.js',
      'https://example.com/analytics.js',
      'https://example.com/config.js',
    ])
  }

  return (
    <DashboardContainer>
      <DashboardCard>
        <h1>Dashboard</h1>
        <SectionTitle>Discovered URLs</SectionTitle>
        <UrlList>
          {discoveredUrls.map((url, index) => (
            <UrlItem key={index}>{url}</UrlItem>
          ))}
        </UrlList>
        <SectionTitle>Discovered JavaScript Files</SectionTitle>
        <JsFileList>
          {discoveredJsFiles.map((jsFile, index) => (
            <JsFileItem key={index}>{jsFile}</JsFileItem>
          ))}
        </JsFileList>
      </DashboardCard>
    </DashboardContainer>
  )
}

const DashboardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`

const DashboardCard = styled.div`
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 2rem;
  width: 800px;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
`

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const UrlList = styled.ul`
  list-style-type: none;
  padding: 0;
`

const UrlItem = styled.li`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
`

const JsFileList = styled.ul`
  list-style-type: none;
  padding: 0;
`

const JsFileItem = styled.li`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
`

export default Dashboard
