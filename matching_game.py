
import pandas as pd

########################################THIS IS ALL THE DATA##############################
question_list_df = pd.read_csv("question_list_import.csv")
personality_df = pd.read_csv("personality_input.csv")
scoring_df = pd.DataFrame(
                          {
                          "Description":['strongly disagree', 'disagree', 'neutral', 'agree', 'strongly agree' ],
                          "Scoring": [1, 2, 3, 4, 5]
                          }
                          )
matching_df = pd.DataFrame(
                           {
                           "Match Rate":['Perfect!', 'Great', 'Average', 'Not Good', 'Hope you never meet...'],
                           "Scoring": [10.904, 21.808, 32.712, 43.62, 54.52]
                           }
                           )

########################################Ask the Questions##############################

my_list = []

#iterating over list of personality questions
for index, row in question_list_df.iterrows():
    print('1 - strongly disagree, 2 - disagree, 3 - neutral, 4 - agree, 5 - strongly agree')
    my_answer = input(row[0])
    
    my_list.append(my_answer)
#print (my_list)

my_list = list(map(int, my_list)) #changing all values in list into an int
my_df = pd.DataFrame({'Student':my_list}) #changing list into a df
print(my_df)


print(personality_df)
#print(personality_df.dtypes)

# calculate_df = pd.concat([my_df, personality_df], axis=1).reindex(my_df.index) #concatenating df
# print(calculate_df)

match_value_df = personality_df.subtract(my_list, axis =0) #why can I not do this as a dataframe?
match_value_df = match_value_df.abs()


print (match_value_df)

twice_series = match_value_df.sum(axis = 0)
twice_series = twice_series.sort_values(ascending=True)
#twice_df.sort_values("match", axis = 0, ascending = True)
#twice_list = twice_series.values.tolist
print(twice_series)

print("complete")
