import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class BackupPage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div>
          <h3>Backup Account</h3>

          <p>
            The backup phrase below will allow you to restore your wallet.
            <b>Write down the words and keep them in a safe place.</b>
          </p>

          <pre><code>cat dog mouse car tree stove kitten power waffle muffin burger pickle</code></pre>

          <div>
            <button className="btn btn-primary">Delete Backup Phrase</button>
          </div>
        </div>
      </div>
    )
  }
}
