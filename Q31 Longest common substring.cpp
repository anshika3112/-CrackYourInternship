class Solution {
public:
    string longestCommonPrefix(vector<string>& arr) {
          sort(arr.begin(),arr.end());
        
        string a = arr[0];
        string b = arr[arr.size()-1];
        int i = 0;
        string ans="";
        char ch;
        while(i<a.size() ){
            if( a[i] == b[i]){
                ans+=a[i];
                i++;
            }
            else break;
        }
        if(ans.size() == 0)return "";
        else 
        return ans;
    }
};
