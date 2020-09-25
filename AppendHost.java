package mypackage;
import java.io.BufferedReader;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;
import java.io.InputStreamReader;


public class AppendHost {
    public void Append() throws IOException{
        Scanner sc = new Scanner(System.in);
        System.out.println("Please Enter Ip Address (eg. 192.168.0.0) :-");
        String Ip =  sc.nextLine();
        System.out.println("\nPlease Enter UserName (eg: root):-");
        String UserName = sc.nextLine();
        System.out.println("\nPlease Enter Password (eg: root):-");
        String Password = sc.nextLine();

        URL urlforget = new URL("http://localhost:9000/AppendHost?Ip="+Ip+"&UserName="+UserName+"&Password="+Password);
        String readline = null;
        HttpURLConnection connection = (HttpURLConnection) urlforget.openConnection();
        connection.setRequestMethod("GET");
        int responsecode = connection.getResponseCode();
        if (responsecode == HttpURLConnection.HTTP_OK) {
            // System.out.println(connection.getInputStream());
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            // StringBuffer response = new StringBuffer();
            while ((readline = in.readLine()) != null) {
                System.out.println(readline);

            }
            in.close();
        } else {
            System.out.println("Get Not Worked");
        }

        
        
    }
}
