import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ChampionsList from './components/champions/list/index'
import ChampionDetail from './components/championDetail/index'
import './css/Style.scss'
class App extends React.Component {
    
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ChampionsList} />
                    <Route path='/champ/:id' component={ChampionDetail} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
