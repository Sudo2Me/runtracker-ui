import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SettingsPanel extends Component {
  @tracked showTravelTime = true;
  @tracked showCompetitions = true;

  @action
  close() {
    this.args.isVisible = false;
  }
}
