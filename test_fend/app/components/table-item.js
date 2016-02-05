import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    actions:{
            deleteItem: function(id){
                let xhr = new XMLHttpRequest();
                xhr.open("POST", "api/tests/"+id, true);
                xhr.send();
                //console.log(this);
                //this.get('targetObject.model').then(function(item){
                //    item.destroyRecord();
                //});
            }
    }
});
