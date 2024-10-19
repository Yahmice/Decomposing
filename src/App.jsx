import './App.css';

import News from './components/Header/News/News';
import NewsCategories from './DATA/NewsCategories.jsx';
import NewsNames from './DATA/NewsNames';
import ExchangeRates from './components/Header/ExchangeRate/ExchangeRates';
import CurrencyRates from './DATA/CurrencyRates';
import Ads from './components/Header/Ads/Ads';
import Search from './components/Body/Search';
import SearchCategories from './DATA/SearchCategories';
import Image from './components/Header/Image/Image';

import Widgets from './components/Footer/Widgets';

import WeatherWidget from './components/Footer/Widgets/WeatherWidget/WeatherWidget';
import FavoritesWidget from './components/Footer/Widgets/FavoritesWidget/FavoritesWidget';
import Favorites from './DATA/Favorites';
import GermanMapWidget from './components/Footer/Widgets/GermanyMapWidget/GermanyMapWidget';
import GermanMap from './DATA/GermanMap';
import TVProgramWidget from './components/Footer/Widgets/TVWidget/TVWidget';
import TVProgramms from './DATA/TvProgramms';
import StreamWidget from './components/Footer/Widgets/StreamWidget/StreamWidget';
import streams from './DATA/Streams';

function App() {
    return (
        <>
            <header className="App-header">
                <div className="App-wrapper">
                    <div className="App-header__main">
                        <News newsCategories={NewsCategories} newsNames={NewsNames} />

                        <ExchangeRates currencyRates={CurrencyRates} />
                    </div>

                    <Ads
                        title="Работа над ошибками"
                        description="Смотрите на Яндексе и запоминайте"
                    >
                        <Image
                            containerClass="Ads__image-container"
                            imgClass="Ads-image"
                            src="https://picsum.photos/id/2/100"
                            alt="Plug"
                        />
                    </Ads>
                </div>
            </header>

            <div className="App-body">
                <div className="App-wrapper">

                    <Search
                        searchCategories={SearchCategories}
                        searchBarLabel="Яндекс"
                        searchBtnName="Найти"
                        searchAdvice="Найдётся всё. Например,"
                        searchExample="фаза луны сегодня"
                    />

                    <Image
                        containerClass="Banner"
                        imgClass="Banner-image"
                        src="https://picsum.photos/id/1063/1000"
                        alt="Plug"
                    />

                </div>
            </div>

            <footer className="App-footer">
                <div className="App-wrapper">
                    <Widgets>
                        <WeatherWidget
                            title="Погода"
                            averageTemperature="+17"
                            morningTemperature="+17"
                            daytimeTemperature="+20"
                        />
                        <GermanMapWidget
                            title="Карта Германии"
                            items={GermanMap}
                        />
                        <StreamWidget
                            title="Эфир"
                            items={streams}
                        />
                        <FavoritesWidget
                            title="Посещаемое"
                            items={Favorites}
                        />
                        <TVProgramWidget
                            title="Телепрограмма"
                            items={TVProgramms}
                        />
                    </Widgets>

                </div>
            </footer>
        </>
    );
}

export default App;