import React, { Component } from 'react'
import { UserConsumer } from './ComponentContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
            //   <div>ComponentF</div>
        )
    }
}

export default ComponentF