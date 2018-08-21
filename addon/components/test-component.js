import Component from "@ember/component";
import { defineProperty } from '@ember/object';
import { computed } from '@ember/object';

export default Component.extend({
  container: "#modal",
  init() {
    this._super(...arguments);
    
    defineProperty(this,"_container",computed(() => self.document.querySelectorAll(this.get('container'))[0]));
  },
})