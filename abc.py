import streamlit as st
import pandas as pd
from datetime import date,time
st.set_page_config(page_title="Students marks and feedback form:",page_icon="✈",layout="centered")
st.title("🎀Students marks and feedback form:")
st.header("1. student information")
col1,col2=st.columns(2)
with col1:
    en_no=st.text_input("Enrollment no")
    name=st.text_input("Enter name")
with col2:
    sem=st.selectbox("Semester",[1,2,3,4,5,6,7,8])
    div=st.text_input('Division','CST-D3')
exam_time=st.date_input('exam date ',value=date.today())
st.header("2.marks entry")
py1=st.number_input("python-1 marks (out of 100)",min_value=0,max_value=100,value=0)
fsd=st.number_input("fsd-1 marks (out of 100)",min_value=0,max_value=100,value=0)
ps=st.number_input("ps-1 marks (out of 100)",min_value=0,max_value=100,value=0)
De=st.number_input("de-1 marks (out of 100)",min_value=0,max_value=100,value=0)

st.header("3. Feedback")
understanding=st.slider("How well did you understand the subject",1,10,10)
participation=st.radio("class participation",['low','medium','high'])
comment=st.text_area('additional comments')
if st.button('submit record'):
    if not en_no or not name:
        st.error("please fill enrollment no. and name")
    else:
        df=pd.DataFrame({'Enrollment no':[en_no],'Name':[name],'semester':[sem],'division':[div],'exam_date':[exam_time],
                         'python-1':[py1],'fsd-1':[fsd],'PS':[ps],'DE':[De],
                         'understanding':[understanding],
                         "participation":[participation],"comment":[comment]})
        st.success("Record submitted successfully......")
        st.subheader('preview submitted data.......')
        st.dataframe(df)
        csv=df.to_csv(index=False,encoding="utf-8")
        st.download_button(label="Download from here",data=csv,file_name=f"{en_no}_record.csv",mime="text/csv")