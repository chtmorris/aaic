Template.jobDetails.events({  'click .onhome': function(e) {    e.preventDefault();    var currentPostId = this._id;    var postProperties = {      homepage: "On homepage"    }    Jobs.update(currentPostId, {$set: postProperties}, function(error) {      if (error)        {          // display the error to the user          alert(error.reason);      } else {        Router.go('admin');      }    });  },  'click .offhome': function(e) {    e.preventDefault();    var currentPostId = this._id;    var postProperties = {      homepage: "Off homepage"    }    Jobs.update(currentPostId, {$set: postProperties}, function(error) {      if (error)        {          // display the error to the user          alert(error.reason);      } else {        Router.go('admin');      }    });  },  'click .delete': function(e) {    e.preventDefault();    if (confirm("Delete this job?")) {      var currentPostId = this._id;      Jobs.remove(currentPostId);      Router.go('admin');      }  }});