import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { ArrowClockwise } from 'react-bootstrap-icons';
import styles from './NewsFeed.module.css';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [expandedCards, setExpandedCards] = useState({});
  const API_KEY = '5a57173ed2d447fa8e1cdb9165fce67a';
  const API_URL = 'https://newsapi.org/v2/everything';

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).toUpperCase();
  };

  // Function to fetch news from NewsAPI
  const fetchNews = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: 'forex OR cryptocurrency OR stocks OR trading OR financial markets',
          language: 'en',
          sortBy: 'publishedAt',
          pageSize: 3,
          apiKey: API_KEY
        }
      });

      if (response.data.articles) {
        const formattedNews = response.data.articles.map((article, index) => ({
          id: index,
          date: formatDate(article.publishedAt),
          title: article.title,
          description: article.description || 'No description available...',
          fullContent: article.content || article.description || 'No content available...',
          author: article.author || 'Unknown Author',
          url: article.url
        }));
        setNews(formattedNews);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      // Use sample data as fallback
      setNews(sampleNews);
    }
  };

  useEffect(() => {
    fetchNews();
    // Refresh news every 5 minutes
    const interval = setInterval(fetchNews, 300000);
    return () => clearInterval(interval);
  }, []);

  const toggleReadMore = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Sample news data for fallback
  const sampleNews = [
    {
      id: 1,
      date: formatDate(new Date()),
      title: 'USD/JPY Analysis - Market Trends',
      description: 'Latest analysis of USD/JPY currency pair movements and market implications...',
      fullContent: 'Detailed analysis of USD/JPY currency pair movements and market implications. Including technical and fundamental factors affecting the exchange rate.',
      author: 'Financial Analyst',
      url: '#'
    },
    // Add more sample news items as needed
  ];

  return (
    <Container className={styles.newsFeedContainer + ' my-4'}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className={styles.newsTitle}>Latest News Update</h2>
        <Button 
          variant="success" 
          className={styles.refreshBtn}
          onClick={fetchNews}
        >
          <ArrowClockwise size={20} />
        </Button>
      </div>
      
      <Row>
        {news.map((item) => (
          <Col md={4} key={item.id} className="mb-4">
            <Card className={`h-100 ${styles.newsCard}`}>
              <Card.Body>
                <div className={`${styles.newsDate} text-success mb-2`}>
                  {item.date}
                </div>
                <Card.Title className={`${styles.newsCardTitle} mb-3`}>
                  {item.title}
                </Card.Title>
                <Card.Text>
                  {expandedCards[item.id] ? item.fullContent : item.description}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="link"
                    className={`${styles.readMoreBtn} p-0`}
                    onClick={() => toggleReadMore(item.id)}
                  >
                    {expandedCards[item.id] ? 'Read Less' : 'Read More'}
                  </Button>
                  <Button
                    variant="link"
                    className={`${styles.sourceBtn} p-0`}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source →
                  </Button>
                </div>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <div className="d-flex align-items-center">
                  <img
                    src={`https://ui-avatars.com/api/?name=${item.author}&background=random`}
                    alt={item.author}
                    className={styles.authorAvatar}
                  />
                  <span className="ms-2">{item.author}</span>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsFeed;