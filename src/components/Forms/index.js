import React from 'react';

import { Container } from './styles';

function Forms() {
  const firstName = React.createRef()
  const lastName = React.createRef()
  const password = React.createRef()

  const handleSubmit = e => {
    e.preventDefault()

    const data = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      password: password.current.value
    }

    console.log(data)
  }

  return (
    <Container>
      <h3>create an account</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            ref={firstName}
          />
        </div>
        <div>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            ref={lastName}
          />
        </div>
        <div>
          <input
            type='password'
            name='password'
            placeholder='Password'
            ref={password}
          />
        </div>
        <button>create</button>
      </form>
    </Container>
  )
}

export default Forms;
