(function($) {
  $(document).ready(function(){
    if ($(".select_address").length) {
      $('input#order_use_billing').unbind("click");
      $(".inner").hide();
      $(".inner input").prop("disabled", true);
      $(".inner select").prop("disabled", true);
      if ($('input#order_use_billing').is(':checked'))
        $("#shipping .select_address").hide();
      
      $('input#order_use_billing').click(function() {
        if ($(this).is(':checked'))
          $("#shipping .select_address").hide();
        else {
          $("#shipping .select_address").show();
          _hide_address_form('shipping');
          $("#new_shipping_address").show();
        }
      });

      $("#new_billing_address").click(function(){
        show_address_form('billing');
        return false;
      });

      $("#new_shipping_address").click(function(){
        show_address_form('shipping');
        return false;
      });

      $("#order_ship_address_id").change(function(){
        hide_address_form('shipping');
      });

      $("#order_bill_address_id").change(function(){
        hide_address_form('billing');
      });
    }
  });

  function hide_address_form(address_type){
     $("#new_" + address_type + "_address").show();
    _hide_address_form(address_type);
  }
  
  function show_address_form(address_type){
    $("#new_" + address_type + "_address").hide()
    $("#order_" + address_type.substring(0, 4) + "_address_id").val(null);
    _show_address_form(address_type);
  }
  
  function _hide_address_form(address_type){
    $("#" + address_type + " .inner").hide();
    $("#" + address_type + " .inner input").prop("disabled", true);
    $("#" + address_type + " .inner select").prop("disabled", true);
  }
  
  function _show_address_form(address_type){
    $("#" + address_type + " .inner").show();
    $("#" + address_type + " .inner input").prop("disabled", false);
    $("#" + address_type + " .inner select").prop("disabled", false);
  }
})(jQuery);
