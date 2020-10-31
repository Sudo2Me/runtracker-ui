import Model, { attr } from '@ember-data/model';

export default class RunModel extends Model {
  @attr("date") date;
  @attr("string") city;
  @attr("string") organizer;
}
