    // track tasks
    $(document).ready(()=>{
        $('.clear-completed').click(()=>{
            $('ul li.checked').remove();
            $('ul li:not(.checked)').show()
        });
       
        $('.filter-completed').click(()=>{
            $('ul li:not(.checked)').hide();
            $('ul li.checked').show();
        });

        $('.filter-active').click(()=>{
            $('ul li.checked').hide();
            $('ul li:not(.checked)').show();
        });

        $('.filter-all').click(()=>{
            $('ul li').show()
        });

    });

    $(document).ready(()=>{
        
        
    })