var FBAPP = FBAPP || {}

FBAPP.factory = function (type, obj) {
    // add checks to make sure that type exists 
    // and that it meets a certain criteria
    // like being part of a set.d
    return new FBAPP[type](obj);
};

FBAPP.constantize = function (name) { 
    var i       = 0;
        arr     = name.split('_'),
        arr2    = [];
    
    
    for (i; i < arr.length; i++)
    {
        arr2.push(FBAPP.capitalize(arr[i]));
    }
    return arr2.join('');
};

FBAPP.capitalize = function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// function for inheritance
FBAPP.extend = function(Child, Parent){
   var F = function() {};
   F.prototype = Parent.prototype;
   Child.prototype = new F();
   Child.prototype.constructor = Child;
   Child.uber
};

FBAPP.Accordian = function(containerId, tabId, ulId) {
    this.container      = $(containerId);
    this.tabs           = $(tabId);
    this.ul             = $(ulId);
    this.nodule_li      = $('<li><a href="#component_marcom_tabs"><span>Nodule Attributes</span></a></li>');
    this.supported_li   = $('<li><a href="#supported_carrier_tabs"><span>Supported Carriers</span></a></li>');
    this.marcom_tabs = $(
        '<div id="component_marcom_tabs" style="background: none repeat scroll 0pt 0pt rgb(255, 255, 255);">'+
            '<ul id="component_marcom_ul">'+
                '<p id="loading_component_marcom" style="padding:10px">loading...</p>'+
            '</ul>'+
        '</div>'
    )
    
    this.nodule_accordian = '<h5>'
    
    this.nodule_accordian_section = '';
    return this;
};

FBAPP.Accordian.prototype.addTabs = function (id) {
    this.nodule_li.appendTo(this.ul);
    this.supported_li.appendTo(this.ul);
    return $(this.container);
};

FBAPP.Accordian.prototype.addMarcomTabs = function(id) {
    this.marcom_tabs.appendTo(this.tabs);
    return $(this.container);
};

FBAPP.Accordian.prototype.removeTabs = function() {
    this.supported_li.remove();
    this.nodule_li.remove();
    return $(this.container);
}

FBAPP.Accordian.prototype.removeMarcomTabs = function() {
    this.marcom_tabs.remove();
    return $(this.container);
}

FBAPP.Accordian.prototype.addNoduleAccordian = function(obj){
    for ( key in obj )
    {
        console.log(key)
    }
}

FBAPP.Accordian.prototype.tabify = function() {
    this.container.tabs();
    return $(this.container);
}


// creates the Nodule Base Object for inheritance
FBAPP.Nodule = function(obj) {
    this.obj = obj;
    this.marcom
    return this;
};

FBAPP.Nodule.prototype.setMarcom = function(obj){
    return this.obj.marcom;
};

FBAPP.Nodule.prototype.splitMarcoms = function(marcom) {
    var i = 0;
    for ( i; i < marcom.length; i++ )
    {
        this[marcom[i][0]] = marcom[i][1];               
    }
}

FBAPP.ReplyY            = function (obj) {
    this.name = 'Reply Y';
    this.obj = obj;
    this.marcom = this.setMarcom(obj);
    this.splitMarcoms(this.marcom);
}; 
FBAPP.CallbackMo        = function (obj) {
    this.name = 'Callback Mo';
    this.obj = obj;
    this.marcom = this.setMarcom(obj);
    this.splitMarcoms(this.marcom);
};
FBAPP.HandsetDiscovery  = function (obj) {
    this.name = 'Handset Discovery';
    this.obj = obj;
    this.marcom = this.setMarcom(obj);
    this.splitMarcoms(this.marcom);
};
FBAPP.CouponNodule      = function (obj) {
    this.name = 'Coupon Nodule';
    this.obj = obj;
    this.marcom = this.setMarcom(obj);
    this.splitMarcoms(this.marcom);
};   

FBAPP.extend(FBAPP.ReplyY, FBAPP.Nodule);
FBAPP.extend(FBAPP.CallbackMo, FBAPP.Nodule);
FBAPP.extend(FBAPP.HandsetDiscovery, FBAPP.Nodule);
FBAPP.extend(FBAPP.CouponNodule, FBAPP.Nodule);



// Flow Object to manage multiple nodules
FBAPP.Flow = function(campaignId, componentId){
    this.name = 'Nodule';
    this.campaignId = campaignId;
    this.componentId = componentId;
    return this;
};

// Get the path for the marcom call
FBAPP.Flow.prototype.getComponentMarcomPath = function() {
    return '/campaigns/'+this.campaignId+'/components/'+this.componentId+'/get_component_marcom'
};

// returns an array of marcom objects -- needs documentation
FBAPP.Flow.prototype.getFlowObjects = function() {
    return this.comResponse.nodules.nodule;
};


FBAPP.Flow.prototype.getNodules = function() {
    var i       = 0,
    objArray    = this.getFlowObjects();
    noduleArray = []
    
    for ( i; i < objArray.length; i++ )
    {
        var constant = FBAPP.constantize(objArray[i].type);
        nodule = FBAPP.factory(constant, objArray[i]);
        noduleArray.push(nodule);
    }
    this.nodes = noduleArray;
    return noduleArray;
};


FBAPP.Flow.prototype.load_component_marcom = function(){
    $.ajax({
        
    });
};
      

FBAPP.Flow.prototype.comResponse = {"type":"success","message":"marcom found","nodules":{"nodule":[{"type":"callback_mo","flow_key":"callback_mo","marcom":[["callback_type",{"default":"0","marcom":"json"}],["callback_url",{"default":"0","marcom":"http://mogreet.com"}],["is_send_sms_failure",{"default":"1","marcom":"1"}],["is_send_sms_success",{"default":"1","marcom":"1"}],["requires_image",{"default":"1","marcom":"0"}],["requires_video",{"default":"1","marcom":"0"}],["sms_failure_message",{"default":"1","marcom":"<message>\nReply HELP for help, STOP to cancel. Msg&Data rates may apply"}],["sms_success_message",{"default":"1","marcom":"<message>\nReply HELP for help, STOP to cancel. Msg&Data rates may apply"}]]},{"type":"handset_discovery","flow_key":"handset_discovery","marcom":[["device_lookup_cache_days",{"default":"1","marcom":"180"}],["is_device_lookup_required",{"default":"1","marcom":"1"}],["is_mms_discover_image_required",{"default":"1","marcom":"0"}],["is_mms_discover_required",{"default":"1","marcom":"1"}],["mms_discover_cache_days",{"default":"1","marcom":"180"}],["mms_discover_image_url",{"default":"1","marcom":""}],["mms_discover_message",{"default":"1","marcom":"This message is checking your handset's media capabilities. Your content will arrive momentarily. Reply HELP for help or STOP to cancel. Msg&data rates may apply."}],["mms_discover_subject",{"default":"1","marcom":"Checking your Handset"}],["user",{"default":"1","marcom":"to"}]]},{"type":"coupon_nodule","flow_key":"coupon_nodule","marcom":[["coupon_email_alert",{"default":"1","marcom":"yourname@youremail.com"}],["has_coupon_message",{"default":"1","marcom":"You've already received a coupon. In case you forgot what it was, here it is again: <coupon>"}],["is_mms_expired_support",{"default":"1","marcom":"0"}],["low_coupon_codes_level",{"default":"1","marcom":"50"}],["message_inactive",{"default":"1","marcom":"This campaign has not started yet or it is already over."}],["mms_binary_carriers_csv",{"default":"1","marcom":"3,4"}],["mms_content_subject",{"default":"1","marcom":"<content_name>"}],["no_coupons_message",{"default":"1","marcom":"Sorry, but we no longer have any coupons to give away. Thanks for texting in though!"}],["time_range",{"default":"1","marcom":"00:00-24:00"}],["time_range_enabled",{"default":"1","marcom":"0"}],["time_zone",{"default":"1","marcom":"GMT"}],["user",{"default":"1","marcom":"to"}]]}]}}