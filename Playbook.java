package mypackage;

import java.io.BufferedReader;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;
import java.io.InputStreamReader;
public class Playbook {
    public String PackageName ;
    public String Name;
    public String StateType;
    public void PlaybookFile() throws IOException
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Choose software to install");
        int number =sc.nextInt();
        switch(number){
            case 1:
                PackageName="name=python3";
                StateType="present";
                Name="Install_python";
                break;
            case 2:
                PackageName="name=java-11-openjdk-devel";
                StateType="latest";
                Name="Install_Java-11";

                break;
            case 3:
                PackageName="name=perl";
                StateType="present";
                Name="Install_Perl";

                break;
            case 4:
                PackageName="name=python3-pip";
                StateType="present";
                Name="Install_Python3-PIP";

                break;
            case 5:
                PackageName="name=python3-lxml";
                StateType="present";
                Name="Install_Python3-lxml";

                break;
            case 6:
                PackageName="name=python3-requests";
                StateType="present";

                Name="Install_Python3-requests";

                break;
            case 7:
                PackageName="name=python3-paramiko";
                StateType="present";
                Name="Install_Python3-Paramiko";

                break;
            case 8:
                PackageName="name=fontconfig";
                StateType="present";
                Name="Install_FontConfig";

                break;
        }
        // String url = "http://localhost:9000/Playbook/AppendPlayBook?Name="+Name+"&package="+Package;

        URL urlforget = new URL("http://localhost:9000/Playbook/AppendPlayBook?PackageName="+PackageName+"&state="+StateType+"&Name="+Name);
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
            System.out.println("Get Not Worked"+responsecode);
        }
    }
}
