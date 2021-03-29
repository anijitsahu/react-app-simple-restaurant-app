import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

// components 
import Header from './components/layout/Header';
import Content from './components/Content';
import Hero from './components/layout/Hero'

// css
import './css/style.css'

const App = () => {

  // Initialize the initial state and its modifier function
  const [panelData, setPanelData] = useState(
    {
      showContent: false,
      searchText: ''
    })


  const searchByValue = (searchText) => {
    console.log('Search text is now', searchText)
    setPanelData({ ...panelData, showContent: true, searchText })
  }

  const { showContent, userInfo, searchText } = panelData
  return (
    <BrowserRouter>
      <div className="container">
        { /* including the Title and other components */}
        <Header />
        {(showContent == false)
          ? <Hero searchByValue={searchByValue} />
          : <Content searchText={searchText} userInfo={userInfo} />}

      </div>
    </BrowserRouter>
  );
}

export default App;
