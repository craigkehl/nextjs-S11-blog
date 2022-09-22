import { useState, useContext, useEffect } from 'react';

import NotificationContext from '../../store/notification-context';
import Notification from '../ui/notification';
import classes from './contact-form.module.css';

async function sendContactData(bodyData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Submission unsuccessful!');
  }
}

function ContactForm() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {
    if (isInvalid) {
      notificationCtx.showNotification({
        title: 'Invalid comment entry...',
        message: 'Please enter a valid email address and comment.',
        status: 'error',
      });
    }
  }, [isInvalid]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredMessage ||
      enteredMessage.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    /* #region sendRequest */
    notificationCtx.showNotification({
      title: 'Submitting message...',
      message: 'Your message is being submitted',
      status: 'pending',
    });

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });

      notificationCtx.showNotification({
        title: 'Success!',
        message: 'Message submitted successfully!',
        status: 'success',
      });
      setEnteredEmail('');
      setEnteredMessage('');
      setEnteredName('');
    } catch (error) {
      notificationCtx.showNotification({
        title: 'Error!',
        message: error.message || 'The message submission failed.',
        status: 'error',
      });
    }
    /* #endregion */
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              value={enteredEmail}
              onChange={event => setEnteredEmail(event.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='name'
              id='name'
              value={enteredName}
              onChange={event => setEnteredName(event.target.value)}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            rows='5'
            id='message'
            value={enteredMessage}
            onChange={event => setEnteredMessage(event.target.value)}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notificationCtx.notification && (
        <Notification
          status={notificationCtx.notification.status}
          title={notificationCtx.notification.title}
          message={notificationCtx.notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
