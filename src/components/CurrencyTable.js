import React from 'react'

class CurrencyTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currencies: props.data.currencies,
      all: props.data.all,
    }
  }

  render() {
    return (
      <table className={'ui celled table'}>
        <thead>
        <tr>
          <th/>
          <th>BTC</th>
          <th>LTC</th>
          <th>Exp</th>
          <th>USD</th>
        </tr>
        </thead>
        <tbody>
        {
          this.state.currencies
            .filter(currency => currency.name)
            .map(currency =>
              <tr key={currency.name}>
                <td>{currency.name}</td>
                <td>{(currency.bitcoin) ? currency.bitcoin.toFixed(2) : 'no value'}</td>
                <td>{(currency.lightcoin) ? currency.lightcoin.toFixed(2) : 'no value'}</td>
                <td>{(currency.exp) ? currency.exp.toFixed(2) : 'no value'}</td>
                <td>{
                  (currency.bitcoin && currency.lightcoin && currency.exp)
                    ? (currency.bitcoin + currency.lightcoin - currency.exp).toFixed(2)
                    : 'no value'
                }</td>
              </tr>,
            )
        }
        <tr>
          <td>Курс</td>
          <td>{(this.state.all.bitcoin) ? this.state.all.bitcoin.toFixed(2) : 'no value'}</td>
          <td>{(this.state.all.lightcoin) ? this.state.all.lightcoin.toFixed(2) : 'no value'}</td>
          <td>-</td>
          <td>{(this.state.all.usd) ? this.state.all.usd.toFixed(2) : 'no value'}</td>
        </tr>
        </tbody>
      </table>
    )
  }
}

export default CurrencyTable