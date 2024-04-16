package com.example.weprogoblig3;

public class Kinobilletter {

    private String valgtfilm;
    private String antall;
    private String fnavn;
    private String enavn;

    private String tel;
    private String epost;

    public Kinobilletter(String valgtfilm, String antall, String fnanvn, String ennavn, String tel, String epost) {
        this.valgtfilm = valgtfilm;
        this.antall = antall;
        this.fnavn = fnanvn;
        this.enavn = ennavn;
        this.tel = tel;
        this.epost = epost;
    }

    public Kinobilletter() {}

    public String getValgtfilm() {
        return valgtfilm;
    }

    public void setValgtfilm(String valgtfilm) {
        this.valgtfilm = valgtfilm;
    }

    public String getAntall() {
        return antall;
    }

    public void setAntall(String antall) {
        this.antall = antall;
    }

    public String getFnavn() {
        return fnavn;
    }

    public void setFnavn(String fnavn) {
        this.fnavn = fnavn;
    }

    public String getEnavn() {
        return enavn;
    }

    public void setEnavn(String enavn) {
        this.enavn = enavn;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}

