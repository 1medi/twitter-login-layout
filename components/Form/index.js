import styles from './Form.module.css'

export default function Form() {
  return (
    <>
    <section>
    <div className={styles.formOuterContainer}>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <fieldset className={styles.fieldSet}>
              <legend>Welcome Back!</legend>
              <label>Username</label>
              <input 
                  id="firstName"
                  className={styles.firstNameInput}
                  type="text"
                  />

                  <label className={styles.email}>Password</label>
                  <input 
                  id="email"
                  className={styles.emailInput}
                  type="email"
                  />
            </fieldset>
          </form>
          <button>Log in</button>
        </div>
      </div>
    </section>


    </>
  )
}