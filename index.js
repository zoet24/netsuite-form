function initialReason() {
    var x = document.forms["OB-form"]["initial-reason"].value;

    if (x == "initial-reason-1") {
        $("#initial-reason-1").removeClass("hidden");
        $("#initial-reason-2").addClass("hidden");
        $("#initial-reason-3").addClass("hidden");
    }
    if (x == "initial-reason-2") {
        $("#initial-reason-2").removeClass("hidden");
        $("#initial-reason-3").addClass("hidden");
        $("#initial-reason-1").addClass("hidden");
    }
    if (x == "initial-reason-3") {
        $("#initial-reason-3").removeClass("hidden");
        $("#initial-reason-1").addClass("hidden");
        $("#initial-reason-2").addClass("hidden");
    }
}