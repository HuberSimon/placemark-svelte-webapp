import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import { W as WelcomeNavigator } from "../../../chunks/WelcomeNavigator.js";
const SignupForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  return `<form><div class="field is-horizontal"><div class="field-body"><div class="field"><label class="label" for="firstName">First Name</label>
                <input class="input" id="firstName" name="firstName" placeholder="Enter first name" type="text"${add_attribute("value", firstName, 0)}></div>
            <div class="field"><label class="label" for="lastName">Last Name</label>
                <input class="input" id="lastName" name="lastName" placeholder="Enter last name" type="text"${add_attribute("value", lastName, 0)}></div></div></div>
    <div class="field"><label class="label" for="email">Email</label>
        <input class="input" id="email" name="email" placeholder="Enter email" type="text"${add_attribute("value", email, 0)}></div>
    <div class="field"><label class="label" for="password">Password</label>
        <input class="input" id="password" name="password" placeholder="Enter Password" type="password"${add_attribute("value", password, 0)}></div>
    <div class="field is-grouped"><button class="button is-link">Sign Up</button></div>
    ${``}</form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

<div class="columns"><div class="column"><div class="box"><h1 class="title">Signup</h1>
            ${validate_component(SignupForm, "SignupForm").$$render($$result, {}, {}, {})}</div></div>
    <div class="column has-text-centered"><img alt="forest" src="/forest-logo.png" width="800"></div></div>`;
});
export {
  Page as default
};
