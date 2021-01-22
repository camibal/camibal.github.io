function modalAnimation(animation) {
    $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + animation + ' animated');
};
$('.modalAnimate').on('show.bs.modal', function (e) {
    var anim = $(this).attr('data-animation-in');
    modalAnimation(anim);
});
$('.modalAnimate').on('hide.bs.modal', function (e) {
    var anim = $(this).attr('data-animation-out');
    modalAnimation(anim);
});