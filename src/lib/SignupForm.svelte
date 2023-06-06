<script>
    let firstName = '';
    let lastName = '';
    let email = '';
    let password = '';
</script>

<form>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <label class="label" for="firstName">First Name</label>
                <input bind:value={firstName} class="input" id="firstName" name="firstName" placeholder="Enter first name" type="text" />
            </div>
            <div class="field">
                <label class="label" for="lastName">Last Name</label>
                <input bind:value={lastName} class="input" id="lastName" name="lastName" placeholder="Enter last name" type="text" />
            </div>
        </div>
    </div>
    <div class="field">
        <label class="label" for="email">Email</label>
        <input bind:value={email} class="input" id="email" name="email" placeholder="Enter email" type="text" />
    </div>
    <div class="field">
        <label class="label" for="password">Password</label>
        <input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" type="password" />
    </div>
    <div class="field is-grouped">
        <button class="button is-link">Sign Up</button>
    </div>
</form>
