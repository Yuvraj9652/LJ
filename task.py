# import streamlit as st
# import numpy.random as rd
# import datetime as dt
# truee=st.button("Generate Random")
# if truee:
#     rand=rd.randint(1,100)
#     if rand<30:
#         st.image("https://picsum.photos/id/0/200/300",caption="nice")
#     elif rand<60:
#         st.audio("krish.mp3")
#     elif rand<90:
#         st.video("samplevideo.mp4")
#     else:
#         st.text("Bhavya")
        
        import streamlit as st 
from datetime import date,time 
st.set_page_config(page_title="B1")
st.title("welcome to my song world")
import time
# st.header("hello welcome")
# st.subheader("song name")
# st.text("jksda ukj gjk dfs  hkjdfkjgh dk hsdfhd fhkjsfdhkljs fjhfdsjklhfd fj dshkhfdkhkf")
# a=10
# st.write(a)
# st.write("skljh ghsdfh kfkugh")
# if st.button("show image"):
#     st.image("https://picsum.photos/600/300",caption="tmkoc")




# if st.button("submit"):
#     p=st.progress(0)
#     with st.spinner("loading........"):
#         for i in range(0,100):
#             time.sleep(0.1)
#             p.progress(i+1)
#     st.success("Task complted")

# st.markdown("**hello**")
# st.markdown("*hello*")

# st.markdown("# hello")


t1,t2,t3=st.tabs(("python","fsd","de")

# if st.button("play audio"):
#     st.audio("krish.mp3")

# if st.button("play video"):
#     st.video("samplevideo.mp4")

# f=st.file_uploader("upload image",type=["jpg","png","jfif"])
# if st.button("upload"):
#     st.image(f)

# st.success("congratulation")
# st.warning("warning")
# st.error("erro")
# st.info("sd iugh sdukah kusdahku asdg hkuh")








# de=st.text_area("project des")
# st.write(de)
# st.sidebar.title("srudnet info")
# z=st.selectbox("select  BAtch",["B1","B2","B3"])
# r=st.radio("slect the subject",["python","fsd"])

# col1,col2=st.columns(2)
# with col1:
#     name=st.text_input("enter your name")
#     st.write(name)
#     age=st.number_input("enter the age",min_value=18)
#     st.write(age)
#     with st.expander("show deatils"):
#         st.write("A")
#         st.write("A")
#         st.write("A")
#         st.write("A")
#         st.write("A")
#         st.write("A")

# with col2:
#     m=st.multiselect("hobby",["cricket","singing","travelling"])
#     st.write(m)
#     d=st.date_input("DOB",min_value=date(1950,1,1))
#     st.write(d)
#     t=st.time_input("selct the time",value=time(9))
#     st.write(t)
#     f=st.slider("Feedback",min_value=5,max_value=10)
#     st.write(f)
# c=st.checkbox("I agree")
# st.write(c)





# bt=st.button("submit")
# if bt:
#     st.write(z)
#     st.write(r)
#     st.write(m)
