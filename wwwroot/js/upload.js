toastr.options = {
    timeOut: 3000, // 3秒
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: 'toast-bottom-right',
    preventDuplicates: false,
    showDuration: '300',
    hideDuration: '1000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
};

$('#multipleUploadButton').click(function () {
    const files = $('#multipleUpload')[0].files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
    }
    formData.append('hoge', 123);

    $.ajax({
        url: './api/upload',
        method: 'post',
        data: formData,
        processData: false,
        contentType: false,
    })
        .done(res => {
            navigator.clipboard.writeText(res);
            toastr['success'](
                '投稿完了しました。応募サイトに入力するIDがクリップボードに記録されていますので、当該フォームにペーストして応募を進めて下さい。',
                '成功'
            );
        })
        .fail(err => toastr['error'](err, '失敗'));
});
