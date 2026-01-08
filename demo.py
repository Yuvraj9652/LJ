import streamlit as st
import datetime as dt
st.header("This is a header")
st.set_page_config(page_title="Bhavyaa")
st.sidebar.title("Student details")
st.sidebar.selectbox("Select batch: ",["B1","B2","B3"])
x=st.sidebar.radio("Subject: ",["FSD","PYTHON"])
if x=="FSD":
    st.text("FSD")
    a=st.text_input("Project title: ")
    b=st.text_input("Enrollement number: ")
    c=st.text_area("Description: ")
    y=st.button("submit")
    if y:
        st.write(a,b,c)
else:
    st.text("PYTHON")
    a=st.text_input("Project title: ")
    b=st.text_input("Enrollement number: ")
    c=st.text_area("Description: ")
    y=st.button("submit")
    if y:
        st.write(a,b,c)
    st.datetime_input("Enter time: ")
