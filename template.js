// leadpages_input_data variables come from the template.json "variables" section
var leadpages_input_data = {};

$(function () {

  $(window).resize(function() {
    if ($('#mobile-indicator-1').is(':visible')) {
      $( ".content-1 .column-2" ).insertBefore( $( ".content-1 .column-1" ) );
    } else {
      $( ".content-1 .column-2" ).insertAfter( $( ".content-1 .shim-1" ) );
    }
    if ($('#mobile-indicator-2').is(':visible')) {
      $(".content-3 .column-2").height('0');
      $(".content-5 .column-2").height('0');
      $(".content-6 .column-2").height('0');

    } else {
      $(".content-3 .column-2").height($(".content-3 .column-1").outerHeight());
      $(".content-5 .column-2").height($(".content-5 .column-1").outerHeight());
      $(".content-6 .column-2").height($(".content-6 .column-1").outerHeight());
    }
  }).resize();
  $('.column, .list, .margin-bottom-remove').each(function() {
    last_visible = $(this).children(":visible").last();
    id_last_visible = $(this).children(".id-margin-bottom-remove");
    if (!(last_visible[0]==id_last_visible[0])) {
      last_visible.addClass("id-margin-bottom-remove");
      id_last_visible.removeClass('id-margin-bottom-remove');
    }
  });
  $('.margin-right-remove').each(function() {
    last_visible = $(this).children(":visible").last();
    id_last_visible = $(this).children(".id-margin-right-remove");
    if (!(last_visible[0]==id_last_visible[0])) {
      last_visible.addClass("id-margin-right-remove");
      id_last_visible.removeClass('id-margin-right-remove');
    }
  })
  $('.margin-right-remove-small').each(function() {
    last_visible = $(this).children(":visible").last();
    id_last_visible = $(this).children(".id-margin-right-remove-small");
    if (!(last_visible[0]==id_last_visible[0])) {
      last_visible.addClass("id-margin-right-remove-small");
      id_last_visible.removeClass('id-margin-right-remove-small');
    }
  })

    if ( typeof window.top.App === 'undefined' ) {
        // Published page

        var $allVideos = $("iframe[src*='//player.vimeo.com'], iframe[src*='//www.youtube.com'], iframe[src*='https://www.youtube-nocookie.com'], object, embed"),
            newWidth,
            $el;

        $allVideos.each(function() {
          $(this)
            // jQuery .data does not work on object/embed elements
            .attr('data-aspectRatio', this.height / this.width)
            .removeAttr('height')
            .removeAttr('width');
        });

        $(window).resize(function() {
          $allVideos.each(function() {
            $el = $(this);  // Automatically detects parent element and resizes according to its dimensions.
            newWidth = $el.parent().width();
            $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio'));
          });

        }).resize();

    } else {
      setInterval( function(){
        if ($('#mobile-indicator-2').is(':visible')) {
          $(".content-3 .column-2").height('0');
          $(".content-5 .column-2").height('0');
          $(".content-6 .column-2").height('0');
        } else {
          $(".content-3 .column-2").height($(".content-3 .column-1").outerHeight());
          $(".content-5 .column-2").height($(".content-5 .column-1").outerHeight());
          $(".content-6 .column-2").height($(".content-6 .column-1").outerHeight());
        }
      }, 200);
      setInterval( function () {
        $('.column, .list, .margin-bottom-remove').each(function() {
          last_visible = $(this).children(":visible").last();
          id_last_visible = $(this).children(".id-margin-bottom-remove");
          if (!(last_visible[0]==id_last_visible[0])) {
            last_visible.addClass("id-margin-bottom-remove");
            id_last_visible.removeClass('id-margin-bottom-remove');
          }
        });
        $('.margin-right-remove').each(function() {
          last_visible = $(this).children(":visible").last();
          id_last_visible = $(this).children(".id-margin-right-remove");
          if (!(last_visible[0]==id_last_visible[0])) {
            last_visible.addClass("id-margin-right-remove");
            id_last_visible.removeClass('id-margin-right-remove');
          }
        })
        $('.margin-right-remove-small').each(function() {
          last_visible = $(this).children(":visible").last();
          id_last_visible = $(this).children(".id-margin-right-remove-small");
          if (!(last_visible[0]==id_last_visible[0])) {
            last_visible.addClass("id-margin-right-remove-small");
            id_last_visible.removeClass('id-margin-right-remove-small');
          }
        })
      }, 200);
      function msieversion() {
          var ua = window.navigator.userAgent;
          var msie = ua.indexOf("MSIE ");

          if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer, return version number
              return true;
          else
              return false;
      }
      window.top.CKEDITOR.on( 'instanceReady', function(e){
          // set the editor instance that just fired the 'instanceReady' event
          var instance = this.instances[e.editor.name];

          var anchorAncestor = [];
          var editableLeadPageId;
          var editableId;

          if (msieversion()) {
              editableLeadPageId = instance.container.$.getAttribute('data-lead-id');
              editableId = instance.container.$.getAttribute('data-editable-id');
          } else {
              editableLeadPageId = instance.container.$.dataset.leadId;
              editableId = instance.container.$.id;
          }

          // set the countdown ancestor based off of lead-page-id if known else based off of id
          if ( editableLeadPageId ){
              anchorAncestor = $('[data-lead-id="' + editableLeadPageId + '"]').parents('ul.countdown');
          } else if ( editableId ) {
              anchorAncestor = $('#' + editableId).parents('ul.countdown');
          }

          // if an ancestor to the editable text is a countdown timer, then disable the font-size drop-down
          if ( anchorAncestor.length ){
              // disable the font-size drop-down
              instance.toolbar[3].items[1].disable();
          }
      });
    }
});
