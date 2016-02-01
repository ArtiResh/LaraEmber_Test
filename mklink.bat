D:
cd xampp/htdocs/ember-laravel-test
rmdir test_bc\public\assets /S/Q
mkdir test_bc\public\assets
XCOPY /S/Q/Y test_fend\dist\assets test_bc\public\assets
rmdir test_fend\dist\assets /S /Q
mklink /D test_fend\dist\assets ..\..\test_bc\public\assets


