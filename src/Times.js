import $ from 'jquery';
import { servicsPramiters } from './Jsonapis';

function Times (props){

    const times = props.selectedservice.map((time) => 
                    <a key={time.id}
                        href=""
                        data-id=""
                        data-from=""
                        data-to=""
                        data-status=""
                        className=" position-relative"
                    >
                        {time.starttime}
                        <i className="fas fa-check-circle selected_time"></i>
                    </a>
    );

    $("body").on("click", ".click_time", function (e) {
        e.preventDefault()
        var reschedule = $('#reschedule').length
    
        $('.click_time').removeClass('border-blue')
        $(this).addClass('border-blue')
    
        if ($(this).attr('data-status') == 'active') {
            $('#time_val').val($(this).attr('data-id'))
    
            if (reschedule == 1) {
                $('#send_time').show();
            } else {
                $.ajax({
                    url: "{{route('saveSecondStepAppointment')}}",
                    type: 'post',
                    data: {
                        time_val: $('#time_val').val(),
                        date_val: $('#date_val').val(),
                        type: $(this).attr('data-type'),
                        from: $(this).data('from'),
                        to: $(this).data('to'),
                        code: "{{$code ?? ''}}",
                        "_token": "{{ csrf_token() }}",
                    },
                    success: function (data) {
                        window.location.href = data;
                    }
                });
            }
        }
    });

        return (
            <div id="timePicker" className="timePicker mt-md-3">
                    <div className="timePicker-head">
                    <h3 className="timePicker-title">
                        Selecet Time
                        <span>{props.selectedservice.time}</span>
                    </h3>
                    </div>

                    <div id="timesContainer" className="times-container">
                    {times}
                    </div>

                    <div id="notAvailableTimes" style={{ display: "none" }}>
                    <div className="notimeAvilabale"></div>
                    </div>
            </div>
        )
}
export default Times;